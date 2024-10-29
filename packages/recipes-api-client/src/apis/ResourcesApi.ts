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
  Resource,
  ResourceSummaryPaginated,
} from '../models/index';
import {
    ResourceFromJSON,
    ResourceToJSON,
    ResourceSummaryPaginatedFromJSON,
    ResourceSummaryPaginatedToJSON,
} from '../models/index';

export interface DeleteResourceRequest {
    id: string;
}

export interface GetAllResourcesRequest {
    page?: number;
    size?: number;
}

export interface GetResourceByIdRequest {
    id: string;
    resource: Omit<Resource, 'id'|'deleted'|'name'|'path'|'contentType'>;
}

export interface GetResourceFileByIdRequest {
    id: string;
    body: Blob;
}

/**
 * 
 */
export class ResourcesApi extends runtime.BaseAPI {

    /**
     * Delete a resource by id
     */
    async deleteResourceRaw(requestParameters: DeleteResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteResource().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/resources/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a resource by id
     */
    async deleteResource(requestParameters: DeleteResourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteResourceRaw(requestParameters, initOverrides);
    }

    /**
     * Get all resources paginated
     */
    async getAllResourcesRaw(requestParameters: GetAllResourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResourceSummaryPaginated>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/resources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResourceSummaryPaginatedFromJSON(jsonValue));
    }

    /**
     * Get all resources paginated
     */
    async getAllResources(requestParameters: GetAllResourcesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResourceSummaryPaginated> {
        const response = await this.getAllResourcesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a resource by its id
     */
    async getResourceByIdRaw(requestParameters: GetResourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resource>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getResourceById().'
            );
        }

        if (requestParameters['resource'] == null) {
            throw new runtime.RequiredError(
                'resource',
                'Required parameter "resource" was null or undefined when calling getResourceById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/resources/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: ResourceToJSON(requestParameters['resource']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResourceFromJSON(jsonValue));
    }

    /**
     * Retrieves a resource by its id
     */
    async getResourceById(requestParameters: GetResourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resource> {
        const response = await this.getResourceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a resource file by its id
     */
    async getResourceFileByIdRaw(requestParameters: GetResourceFileByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getResourceFileById().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling getResourceFileById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/resources/{id}/file`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieves a resource file by its id
     */
    async getResourceFileById(requestParameters: GetResourceFileByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getResourceFileByIdRaw(requestParameters, initOverrides);
    }

}