export type Context = {
    authData: string | null;
    loading: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
};