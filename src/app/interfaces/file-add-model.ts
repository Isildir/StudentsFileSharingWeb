export interface FileAddModel {
    id: number;
    owner: string;
    isOwner: boolean;
    dateAdded: Date;
    fileName: string;
    uploaded: boolean;
    size: number;
    errorMessage: string;
}
