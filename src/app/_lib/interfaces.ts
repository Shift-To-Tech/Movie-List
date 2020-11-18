export interface MovieParams {
    query?: string;
    page?: string;
}

export interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface ApiResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: [];
}
