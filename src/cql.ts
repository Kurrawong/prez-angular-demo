// ==========================
// CQL Filter Data Model
// ==========================

// Base type for any filter expression.
export type FilterExpression =
  | LogicalExpression
  | ComparisonExpression
  | SpatialExpression
  | TemporalExpression
  | FunctionExpression
  | Literal
  | PropertyName;

// The root Filter type which wraps a top-level expression.
export interface Filter {
  expression: FilterExpression;
}

/* ===============================
   Logical Expressions
   =============================== */

// Supported logical operators.
export type LogicalOperator = 'AND' | 'OR' | 'NOT';

export interface LogicalExpression {
  type: 'LogicalExpression';
  operator: LogicalOperator;
  // For NOT, expect a single expression; for AND/OR, an array of two or more.
  expressions: FilterExpression[];
}

/* ===============================
   Comparison Expressions
   =============================== */

// Supported comparison operators.
export type ComparisonOperator =
  | 'PropertyIsEqualTo'
  | 'PropertyIsNotEqualTo'
  | 'PropertyIsLessThan'
  | 'PropertyIsGreaterThan'
  | 'PropertyIsLessThanOrEqualTo'
  | 'PropertyIsGreaterThanOrEqualTo';

export interface ComparisonExpression {
  type: 'ComparisonExpression';
  operator: ComparisonOperator;
  // The property to compare.
  property: PropertyName;
  // The value to compare against. It can be a literal or another property.
  value: Literal | PropertyName;
}

/* ===============================
   Spatial Expressions
   =============================== */

// Supported spatial operators.
export type SpatialOperator =
  | 'BBOX'
  | 'Intersects'
  | 'Within'
  | 'Contains'
  | 'Overlaps'
  | 'Touches'
  | 'Crosses';

export interface SpatialExpression {
  type: 'SpatialExpression';
  operator: SpatialOperator;
  // Spatial property (often a geometry attribute).
  property: PropertyName;
  // Geometry literal (could be expressed in GeoJSON or another suitable format).
  geometry: Geometry;
}

/* ===============================
   Temporal Expressions
   =============================== */

export type TemporalOperator =
  | 'TM_After'
  | 'TM_Before'
  | 'TM_During'
  | 'TM_Equals';

export interface TemporalExpression {
  type: 'TemporalExpression';
  operator: TemporalOperator;
  // Temporal property (e.g., date/time attribute).
  property: PropertyName;
  // Temporal value, which can be a literal (ISO 8601 string) or a time period.
  value: TemporalLiteral;
}

/* ===============================
   Function Expressions
   =============================== */

export interface FunctionExpression {
  type: 'FunctionExpression';
  name: string;
  // Arguments can be any filter expression.
  arguments: FilterExpression[];
}

/* ===============================
   Literals and Property Names
   =============================== */

// Literal values include string, number, boolean, date, or even geometry objects.
export type Literal =
  | { type: 'StringLiteral'; value: string }
  | { type: 'NumberLiteral'; value: number }
  | { type: 'BooleanLiteral'; value: boolean }
  | { type: 'DateLiteral'; value: string } // ISO 8601 formatted date
  | Geometry; // Reuse Geometry type for geometry literals

export interface PropertyName {
  type: 'PropertyName';
  name: string;
}

/* ===============================
   Geometry and Temporal Types
   =============================== */

// A simple representation for geometry. You might replace this with a more robust model (e.g., GeoJSON).
export interface Geometry {
  type: string; // e.g., "Point", "Polygon", etc.
  coordinates: any; // Use a more specific type if available
}

// Temporal literal can represent an instant or a range.
export type TemporalLiteral =
  | { type: 'TimeInstant'; value: string } // ISO 8601 instant
  | { type: 'TimePeriod'; start: string; end: string }; // ISO 8601 period

// ==========================
// Utility Functions
// ==========================

/**
 * Attempts to parse a query string value into a Filter object.
 * The input is expected to be a URL-encoded JSON string.
 *
 * @param query - The URL-encoded query string representing a Filter.
 * @returns The parsed Filter object, or null if parsing fails.
 */
export function parseFilterQuery(query: string): Filter | null {
  try {
    // Decode the query string and parse as JSON.
    const decoded = decodeURIComponent(query);
    const obj = JSON.parse(decoded);
    // In a full implementation, add validation here to ensure 'obj' conforms to Filter.
    return obj as Filter;
  } catch (err) {
    console.error("Failed to parse filter from query string:", err);
    return null;
  }
}

/**
 * Converts a Filter object to a JSON string.
 *
 * @param filter - The Filter object to convert.
 * @returns A JSON string representation of the Filter.
 */
export function filterToJson(filter: Filter): string {
  return JSON.stringify(filter);
}

// export function addToFilter(filter: Filter, newFilter: Filter): Filter {
//     //filter.expression    
//   return {
//     expression: [...filter.expression, newFilter.expression]
//   };
// }

const sampleFilter = {
    "op": "and",
    "args": [
      {
        "op": "=",
        "args": [
          {
            "property": "http://purl.org/linked-data/registry#status"
          },
          "https://linked.data.gov.au/def/reg-statuses/experimental"
        ]
      }
    ]
  }
  

export const sampleFilterObj = parseFilterQuery(JSON.stringify(sampleFilter));

console.log("*** SMAPLE OBH", sampleFilterObj);
