export interface FormData {
    name: string;
    email: string;
    phone: string | number | readonly string[] | undefined;
    details: string;
    privacyPolicy: boolean;
}