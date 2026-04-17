Difference Between Object.assign and Spread Operator
Characteristics              Object.assign                        Spread Operator
Syntax                  Object.assign(target ...sources)           { ...source }

Mutation                 Mutates the target object               Does not mutate the original object

Prototype Chain      Ignores properties from the prototype chain  Ignores properties from the prototype chain

Enumerability        Copies enumerable properties                   Copies enumerable properties

Copy Type                   Shallow copy                            Shallow copy

Multiple Sources     Can merge multiple source objects           Can merge multiple source objects

Performance          Slightly slower due to function call Generally faster due to the concise syntax

Use Case        Suitable for merging into the existing objects    Suitable for creating new objects