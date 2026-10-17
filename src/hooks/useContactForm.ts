/**
 * @file useContactForm.ts
 * @description Encapsulates all contact form state, validation, and submission logic.
 * Uses useReducer for predictable state transitions. Zero business logic in the UI layer.
 *
 * @example
 * const { fields, errors, status, handleChange, handleSubmit } = useContactForm();
 */
'use client';

import { useReducer, useCallback } from 'react';
import {
  ContactFormSchema,
  ContactFormData,
  ContactFormErrors,
  FormStatus,
} from '@/lib/validators/contact.validator';

// ─── State ────────────────────────────────────────────────────────────────────

interface FormState {
  fields: Partial<ContactFormData>;
  errors: ContactFormErrors;
  status: FormStatus;
}

const INITIAL_STATE: FormState = {
  fields: {
    fullName: '',
    phone: '',
    licenseCategory: undefined,
    message: '',
  },
  errors: {},
  status: 'idle',
};

// ─── Actions ──────────────────────────────────────────────────────────────────

type FormAction =
  | { type: 'FIELD_CHANGE'; field: keyof ContactFormData; value: string }
  | { type: 'SET_ERRORS'; errors: ContactFormErrors }
  | { type: 'SET_STATUS'; status: FormStatus }
  | { type: 'RESET' };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors, status: 'idle' };
    case 'SET_STATUS':
      return { ...state, status: action.status };
    case 'RESET':
      return INITIAL_STATE;
    default: {
      // Exhaustive check — TypeScript enforces this at compile time
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface UseContactFormReturn {
  fields: Partial<ContactFormData>;
  errors: ContactFormErrors;
  status: FormStatus;
  handleChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

/**
 * @returns Form state, error map, submission status, and event handlers.
 */
export function useContactForm(): UseContactFormReturn {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleChange = useCallback(
    (field: keyof ContactFormData, value: string): void => {
      dispatch({ type: 'FIELD_CHANGE', field, value });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      dispatch({ type: 'SET_STATUS', status: 'submitting' });

      const result = ContactFormSchema.safeParse(state.fields);

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        const errors: ContactFormErrors = {
          fullName: fieldErrors.fullName?.[0],
          phone: fieldErrors.phone?.[0],
          licenseCategory: fieldErrors.licenseCategory?.[0],
          message: fieldErrors.message?.[0],
        };
        dispatch({ type: 'SET_ERRORS', errors });
        return;
      }

      try {
        const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
        if (!endpoint) throw new Error('Formspree endpoint is not configured.');

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(result.data),
        });

        if (!response.ok) throw new Error(`Formspree error: ${response.status}`);

        dispatch({ type: 'SET_STATUS', status: 'success' });
      } catch {
        dispatch({ type: 'SET_STATUS', status: 'error' });
      }
    },
    [state.fields]
  );

  return {
    fields: state.fields,
    errors: state.errors,
    status: state.status,
    handleChange,
    handleSubmit,
  };
}
