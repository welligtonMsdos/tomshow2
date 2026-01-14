export interface ApiResponse{
    success: boolean;
    message: string;
    data?: DataResponse;
}

export interface DataResponse {
    result: string;
}
