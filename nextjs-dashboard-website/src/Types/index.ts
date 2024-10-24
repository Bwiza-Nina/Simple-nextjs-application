export interface VisitData{
    id: number;
    date: string;
    page_views: number;
    unique_visitors: number;
    bounce_rate: number;
    avg_session_duration: number;
}

export interface CustomerData{
    id: number;
    name: string;
    email: string;
    signup_date: string;
    last_activity: string;
}