// Natural Earth contains disputed regions without ISO IDs and some repeated IDs.
// Include the feature index so every geographic shape has a stable React key.
export function mapFeatureKey(feature:{id?:string|number;properties?:{name?:unknown}|null},index:number):string{
 return `${feature.id??'unassigned'}:${String(feature.properties?.name??'unnamed')}:${index}`
}
