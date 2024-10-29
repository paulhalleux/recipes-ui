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
/**
 * 
 * @export
 * @interface CreateRecipeIngredientRequest
 */
export interface CreateRecipeIngredientRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateRecipeIngredientRequest
     */
    ingredientId?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateRecipeIngredientRequest
     */
    quantity?: number;
}

/**
 * Check if a given object implements the CreateRecipeIngredientRequest interface.
 */
export function instanceOfCreateRecipeIngredientRequest(value: object): value is CreateRecipeIngredientRequest {
    return true;
}

export function CreateRecipeIngredientRequestFromJSON(json: any): CreateRecipeIngredientRequest {
    return CreateRecipeIngredientRequestFromJSONTyped(json, false);
}

export function CreateRecipeIngredientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRecipeIngredientRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ingredientId': json['ingredientId'] == null ? undefined : json['ingredientId'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
    };
}

  export function CreateRecipeIngredientRequestToJSON(json: any): CreateRecipeIngredientRequest {
      return CreateRecipeIngredientRequestToJSONTyped(json, false);
  }

  export function CreateRecipeIngredientRequestToJSONTyped(value?: CreateRecipeIngredientRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ingredientId': value['ingredientId'],
        'quantity': value['quantity'],
    };
}
