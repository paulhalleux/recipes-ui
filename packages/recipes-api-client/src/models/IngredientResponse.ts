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

import { mapValues } from '../runtime';
import type { IngredientUnit } from './IngredientUnit';
import {
    IngredientUnitFromJSON,
    IngredientUnitFromJSONTyped,
    IngredientUnitToJSON,
    IngredientUnitToJSONTyped,
} from './IngredientUnit';

/**
 * 
 * @export
 * @interface IngredientResponse
 */
export interface IngredientResponse {
    /**
     * 
     * @type {string}
     * @memberof IngredientResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof IngredientResponse
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IngredientResponse
     */
    description?: string | null;
    /**
     * 
     * @type {IngredientUnit}
     * @memberof IngredientResponse
     */
    unit?: IngredientUnit;
    /**
     * 
     * @type {string}
     * @memberof IngredientResponse
     */
    imageId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IngredientResponse
     */
    deleted?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof IngredientResponse
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof IngredientResponse
     */
    lastModified?: Date;
}



/**
 * Check if a given object implements the IngredientResponse interface.
 */
export function instanceOfIngredientResponse(value: object): value is IngredientResponse {
    return true;
}

export function IngredientResponseFromJSON(json: any): IngredientResponse {
    return IngredientResponseFromJSONTyped(json, false);
}

export function IngredientResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngredientResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'unit': json['unit'] == null ? undefined : IngredientUnitFromJSON(json['unit']),
        'imageId': json['imageId'] == null ? undefined : json['imageId'],
        'deleted': json['deleted'] == null ? undefined : json['deleted'],
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'lastModified': json['lastModified'] == null ? undefined : (new Date(json['lastModified'])),
    };
}

  export function IngredientResponseToJSON(json: any): IngredientResponse {
      return IngredientResponseToJSONTyped(json, false);
  }

  export function IngredientResponseToJSONTyped(value?: IngredientResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'unit': IngredientUnitToJSON(value['unit']),
        'imageId': value['imageId'],
        'deleted': value['deleted'],
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'lastModified': value['lastModified'] == null ? undefined : ((value['lastModified']).toISOString()),
    };
}

