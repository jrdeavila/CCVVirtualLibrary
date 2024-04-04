// To parse this data:
//
//   import { Convert } from "./file";
//
//   const categoryResponse = Convert.toCategoryResponse(json);

export interface CategoryResponse {
  id?: number;
  name?: string;
  code?: string;
  subcategories?: SubcategoryResponse[];
}

export interface SubcategoryResponse {
  id: number;
  name: string;
  code: string;
  category_id?: number;
}

// Converts JSON strings to/from your types
export class CategoryConvert {
  public static toCategoryResponse(json: string): CategoryResponse[] {
    return JSON.parse(json);
  }

  public static categoryResponseToJson(value: CategoryResponse[]): string {
    return JSON.stringify(value);
  }
}
