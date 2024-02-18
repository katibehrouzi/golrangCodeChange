export interface HttpResponseI<T = undefined> {
    data: T;
    error: any;
    hasError: null;
}