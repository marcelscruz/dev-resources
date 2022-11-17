import { categories } from 'const'

type Primitives = string | number | symbol

type Elem = string

type Acc = Record<string, any>

type Predicate<Accumulator extends Acc, El extends Elem> = El extends keyof Accumulator ? Accumulator[El] : Accumulator

type Reducer<Keys extends Elem, Accumulator extends Acc = {}> = Keys extends `${infer Prop}.${infer Rest}`
    ? Reducer<Rest, Predicate<Accumulator, Prop>>
    : Keys extends `${infer Last}`
    ? Predicate<Accumulator, Last>
    : never

type KeysUnion<T, Cache extends string = ''> = T extends Primitives
    ? Cache
    : {
          [P in keyof T]: P extends string
              ? Cache extends ''
                  ? KeysUnion<T[P], `${P}`>
                  : Cache | KeysUnion<T[P], `${Cache}.${P}`>
              : never
      }[keyof T]

export type CategoryKeys = KeysUnion<typeof categories>
export type CategoryValues = Reducer<CategoryKeys, typeof categories>
