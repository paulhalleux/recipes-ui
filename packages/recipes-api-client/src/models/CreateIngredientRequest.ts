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
 * @interface CreateIngredientRequest
 */
export interface CreateIngredientRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateIngredientRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateIngredientRequest
     */
    description?: string | null;
    /**
     * 
     * @type {IngredientUnit}
     * @memberof CreateIngredientRequest
     */
    unit?: IngredientUnit;
}



/**
 * Check if a given object implements the CreateIngredientRequest interface.
 */
export function instanceOfCreateIngredientRequest(value: object): value is CreateIngredientRequest {
    return true;
}

export function CreateIngredientRequestFromJSON(json: any): CreateIngredientRequest {
    return CreateIngredientRequestFromJSONTyped(json, false);
}

export function CreateIngredientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateIngredientRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'unit': json['unit'] == null ? undefined : IngredientUnitFromJSON(json['unit']),
    };
}

  export function CreateIngredientRequestToJSON(json: any): CreateIngredientRequest {
      return CreateIngredientRequestToJSONTyped(json, false);
  }

  export function CreateIngredientRequestToJSONTyped(value?: CreateIngredientRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'unit': IngredientUnitToJSON(value['unit']),
    };
}

