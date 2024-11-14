type  NestedNumber = NestedNumber[] | number;
const number: NestedNumber = [1, 3, [12, [3, 4]]]

type JSONPrimitive = string | number | boolean | null;
type JSONObject = {
    [k: string]: JSONValue;
}

type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;