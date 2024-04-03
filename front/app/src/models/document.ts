// To parse this data:
//
//   import { Convert, DocumentResponse } from "./file";
//
//   const documentResponse = Convert.toDocumentResponse(json);

export interface DocumentResponse {
  items: DocumentModel[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface DocumentModel {
  id: number;
  title: string;
  description: string;
  source: string;
  status: string;
  quantity: number;
  subcategory: Subcategory;
  image: string;
  pdf: string;
}

export interface Subcategory {
  id: number;
  name: string;
  code: string;
  category_id: number;
}

// Converts JSON strings to/from your types
export class DocumentConvert {
  public static toDocumentResponse(json: string): DocumentResponse {
    return JSON.parse(json);
  }

  public static documentResponseToJson(value: DocumentResponse): string {
    return JSON.stringify(value);
  }
}
