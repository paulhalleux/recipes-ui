/* tslint:disable */
/* eslint-disable */
/**
 * Recipes.Api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateRecipeRequest,
  RecipeResponse,
  RecipeSummaryPaginated,
  UpdateRecipeRequest,
} from '../models/index';
import {
    CreateRecipeRequestFromJSON,
    CreateRecipeRequestToJSON,
    RecipeResponseFromJSON,
    RecipeResponseToJSON,
    RecipeSummaryPaginatedFromJSON,
    RecipeSummaryPaginatedToJSON,
    UpdateRecipeRequestFromJSON,
    UpdateRecipeRequestToJSON,
} from '../models/index';

export interface CreateRecipeOperationRequest {
    createRecipeRequest: CreateRecipeRequest;
}

export interface DeleteRecipeRequest {
    id: string;
}

export interface GetAllRecipesRequest {
    page?: number;
    size?: number;
}

export interface GetRecipeByIdRequest {
    id: string;
}

export interface RestoreRecipeRequest {
    id: string;
}

export interface UpdateRecipeOperationRequest {
    id: string;
    updateRecipeRequest: UpdateRecipeRequest;
}

export interface UploadRecipeImageRequest {
    id: string;
    file: Blob;
}

/**
 * 
 */
export class RecipesApi extends runtime.BaseAPI {

    /**
     * Create a new recipe
     */
    async createRecipeRaw(requestParameters: CreateRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeResponse>> {
        if (requestParameters['createRecipeRequest'] == null) {
            throw new runtime.RequiredError(
                'createRecipeRequest',
                'Required parameter "createRecipeRequest" was null or undefined when calling createRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/recipes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRecipeRequestToJSON(requestParameters['createRecipeRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipeResponseFromJSON(jsonValue));
    }

    /**
     * Create a new recipe
     */
    async createRecipe(requestParameters: CreateRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeResponse> {
        const response = await this.createRecipeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a recipe by id
     */
    async deleteRecipeRaw(requestParameters: DeleteRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/recipes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a recipe by id
     */
    async deleteRecipe(requestParameters: DeleteRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRecipeRaw(requestParameters, initOverrides);
    }

    /**
     * Get all recipes paginated
     */
    async getAllRecipesRaw(requestParameters: GetAllRecipesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeSummaryPaginated>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/recipes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipeSummaryPaginatedFromJSON(jsonValue));
    }

    /**
     * Get all recipes paginated
     */
    async getAllRecipes(requestParameters: GetAllRecipesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeSummaryPaginated> {
        const response = await this.getAllRecipesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a recipe by id
     */
    async getRecipeByIdRaw(requestParameters: GetRecipeByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getRecipeById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/recipes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipeResponseFromJSON(jsonValue));
    }

    /**
     * Get a recipe by id
     */
    async getRecipeById(requestParameters: GetRecipeByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeResponse> {
        const response = await this.getRecipeByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Restore a recipe by id
     */
    async restoreRecipeRaw(requestParameters: RestoreRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling restoreRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/recipes/{id}/restore`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipeResponseFromJSON(jsonValue));
    }

    /**
     * Restore a recipe by id
     */
    async restoreRecipe(requestParameters: RestoreRecipeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeResponse> {
        const response = await this.restoreRecipeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a recipe
     */
    async updateRecipeRaw(requestParameters: UpdateRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecipeResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateRecipe().'
            );
        }

        if (requestParameters['updateRecipeRequest'] == null) {
            throw new runtime.RequiredError(
                'updateRecipeRequest',
                'Required parameter "updateRecipeRequest" was null or undefined when calling updateRecipe().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/recipes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRecipeRequestToJSON(requestParameters['updateRecipeRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipeResponseFromJSON(jsonValue));
    }

    /**
     * Update a recipe
     */
    async updateRecipe(requestParameters: UpdateRecipeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecipeResponse> {
        const response = await this.updateRecipeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads an image for a recipe.
     */
    async uploadRecipeImageRaw(requestParameters: UploadRecipeImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling uploadRecipeImage().'
            );
        }

        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError(
                'file',
                'Required parameter "file" was null or undefined when calling uploadRecipeImage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/recipes/{id}/image`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Uploads an image for a recipe.
     */
    async uploadRecipeImage(requestParameters: UploadRecipeImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.uploadRecipeImageRaw(requestParameters, initOverrides);
    }

}
