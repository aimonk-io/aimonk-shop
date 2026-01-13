declare module 'react-hook-form' {
  export function useForm<TFieldValues = any, TContext = any>(
    props?: UseFormProps<TFieldValues, TContext>
  ): UseFormReturn<TFieldValues, TContext>;
  
  export interface UseFormProps<TFieldValues = any, TContext = any> {
    resolver?: any;
    defaultValues?: any;
    mode?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';
    reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    shouldUseNativeValidation?: boolean;
    criteriaMode?: 'firstError' | 'all';
    delayError?: number;
  }
  
  export interface UseFormReturn<TFieldValues = any, TContext = any> {
    register: (name: any, options?: any) => any;
    handleSubmit: (onValid: any, onInvalid?: any) => (e?: any) => void;
    formState: {
      errors: any;
      isDirty: boolean;
      isValid: boolean;
      isSubmitting: boolean;
      isSubmitted: boolean;
      submitCount: number;
      touchedFields: any;
      dirtyFields: any;
      validatingFields: any;
    };
    reset: (values?: any, options?: any) => void;
    setValue: (name: any, value: any, options?: any) => void;
    getValues: (payload?: any) => any;
    watch: (name?: any) => any;
    trigger: (name?: any) => Promise<boolean>;
    clearErrors: (name?: any) => void;
    setError: (name: any, error: any, options?: any) => void;
    setFocus: (name: any, options?: any) => void;
    getFieldState: (name: any, formState?: any) => any;
    unregister: (name: any) => void;
    control: any;
  }
}

