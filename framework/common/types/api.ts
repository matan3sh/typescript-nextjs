export type ApiFetcherOptions = {
  url: string;
  query: string;
};

export type ApiFetcherResult<T> = { data: T };

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResult<T>>;
}
