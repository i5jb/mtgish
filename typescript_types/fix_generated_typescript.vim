% ! sort
%s:^// This file.*$\n::
%s:^import type.*$\n::
%s:^export type:type:
%s:^$\n::
%s: = : =\r| :
%s: | :\r| :g
%s:"_OracleCard"\: "NormalObject":"_OracleCard"\: "Card":
%s:"_OracleCard"\: "TransformingObject":"_OracleCard"\: "Transforming":
%s:"_OracleCard"\: "ModalDFCObject":"_OracleCard"\: "ModalDFC":
%s:"_OracleCard"\: "SplitObject":"_OracleCard"\: "Split":
%s:"_OracleCard"\: "MutateStackObject":"_OracleCard"\: "Card":
%s:"_OracleCard"\: "FacedownProperties":"_OracleCard"\: "Card":
wq
