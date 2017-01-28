/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var sqlParser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,3],$V1=[21,22,24,25,26,27,28,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V2=[22,24,25,26,27,28,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V3=[24,25,26,27,28,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V4=[24,26,27,28,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V5=[24,27,28,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V6=[24,28,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V7=[24,29,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V8=[24,30,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$V9=[24,31,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$Va=[24,34,35,39,41,42,44,45,47,48,50,53,65,68,70,71,72,73,75,76],$Vb=[1,59],$Vc=[1,31],$Vd=[1,32],$Ve=[1,50],$Vf=[1,57],$Vg=[1,58],$Vh=[1,60],$Vi=[1,61],$Vj=[1,62],$Vk=[1,63],$Vl=[1,64],$Vm=[1,42],$Vn=[1,56],$Vo=[1,51],$Vp=[1,52],$Vq=[1,53],$Vr=[1,54],$Vs=[1,55],$Vt=[1,43],$Vu=[1,44],$Vv=[5,32,55],$Vw=[5,32,38,39,55,60,61,63,66],$Vx=[5,32,34,38,39,55,60,61,63,66,68,70,78,79,80,81,82,83,84,85,86],$Vy=[1,109],$Vz=[32,55],$VA=[2,48],$VB=[1,115],$VC=[1,116],$VD=[60,63,66];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"main":3,"selectClause":4,"EOF":5,"SELECT":6,"distinctOpt":7,"highPriorityOpt":8,"maxStateMentTimeOpt":9,"straightJoinOpt":10,"sqlSmallResultOpt":11,"sqlBigResultOpt":12,"sqlBufferResultOpt":13,"sqlCacheOpt":14,"sqlNoCacheOpt":15,"sqlCalcFoundRowsOpt":16,"selectExprList":17,"ALL":18,"DISTINCT":19,"DISTINCTROW":20,"HIGH_PRIORITY":21,"MAX_STATEMENT_TIME":22,"=":23,"NUMERIC":24,"STRAIGHT_JOIN":25,"SQL_SMALL_RESULT":26,"SQL_BIG_RESULT":27,"SQL_BUFFER_RESULT":28,"SQL_CACHE":29,"SQL_NO_CACHE":30,"SQL_CALC_FOUND_ROWS":31,",":32,"selectExpr":33,"*":34,"SELECT_EXPR_STAR":35,"expr":36,"selectExprAliasOpt":37,"AS":38,"IDENTIFIER":39,"string":40,"QUOTED_IDENTIFIER":41,"STRING":42,"number":43,"EXPONENT_NUMERIC":44,"HEX_NUMERIC":45,"boolean":46,"TRUE":47,"FALSE":48,"null":49,"NULL":50,"literal":51,"function_call":52,"(":53,"function_call_param_list":54,")":55,"function_call_param":56,"identifier":57,"case_expr":58,"when_then_list":59,"WHEN":60,"THEN":61,"case_when_else":62,"ELSE":63,"case_when":64,"CASE":65,"END":66,"simple_expr_prefix":67,"+":68,"simple_expr":69,"-":70,"~":71,"!":72,"BINARY":73,"expr_list":74,"ROW":75,"EXISTS":76,"bit_expr":77,"|":78,"&":79,"<<":80,">>":81,"/":82,"DIV":83,"MOD":84,"%":85,"^":86,"predicate":87,"boolean_primary":88,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"SELECT",18:"ALL",19:"DISTINCT",20:"DISTINCTROW",21:"HIGH_PRIORITY",22:"MAX_STATEMENT_TIME",23:"=",24:"NUMERIC",25:"STRAIGHT_JOIN",26:"SQL_SMALL_RESULT",27:"SQL_BIG_RESULT",28:"SQL_BUFFER_RESULT",29:"SQL_CACHE",30:"SQL_NO_CACHE",31:"SQL_CALC_FOUND_ROWS",32:",",34:"*",35:"SELECT_EXPR_STAR",38:"AS",39:"IDENTIFIER",41:"QUOTED_IDENTIFIER",42:"STRING",44:"EXPONENT_NUMERIC",45:"HEX_NUMERIC",47:"TRUE",48:"FALSE",50:"NULL",53:"(",55:")",60:"WHEN",61:"THEN",63:"ELSE",65:"CASE",66:"END",68:"+",70:"-",71:"~",72:"!",73:"BINARY",75:"ROW",76:"EXISTS",78:"|",79:"&",80:"<<",81:">>",82:"/",83:"DIV",84:"MOD",85:"%",86:"^"},
productions_: [0,[3,2],[4,12],[7,1],[7,1],[7,1],[7,0],[8,1],[8,0],[9,3],[9,0],[10,1],[10,0],[11,1],[11,0],[12,1],[12,0],[13,1],[13,0],[14,1],[14,0],[15,1],[15,0],[16,1],[16,0],[17,3],[17,1],[33,1],[33,1],[33,2],[37,0],[37,2],[37,1],[40,1],[40,1],[43,1],[43,1],[43,1],[46,1],[46,1],[49,1],[51,1],[51,1],[51,1],[51,1],[52,4],[54,3],[54,1],[56,0],[56,1],[56,1],[56,1],[57,1],[58,0],[58,1],[59,4],[59,5],[62,0],[62,2],[64,5],[67,2],[67,2],[67,2],[67,2],[67,2],[69,1],[69,1],[69,1],[69,1],[69,3],[69,4],[69,3],[69,4],[69,1],[77,1],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[77,3],[87,1],[88,1],[36,1],[74,1],[74,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return {nodeType: 'Main', value: $$[$0-1]}; 
break;
case 2:

        return {
          type: 'Select',
          distinctOpt: $$[$0-10],
          highPriorityOpt: $$[$0-9],
          maxStateMentTimeOpt: $$[$0-8],
          straightJoinOpt: $$[$0-7],
          sqlSmallResultOpt: $$[$0-6],
          sqlBigResultOpt: $$[$0-5],
          sqlBufferResultOpt: $$[$0-4],
          sqlCacheOpt: $$[$0-3],
          sqlNoCacheOpt: $$[$0-2],
          sqlCalcFoundRowsOpt: $$[$0-1],
          selectExprList: $$[$0]
        }
      
break;
case 3: case 4: case 5: case 9: case 41: case 42: case 43: case 44: case 49: case 50: case 51: case 54: case 58: case 65: case 66: case 67: case 68: case 73: case 74: case 87: case 88: case 89:
 this.$ = $$[$0] 
break;
case 6: case 8: case 10: case 12: case 14: case 16: case 18: case 20: case 22: case 24: case 48: case 53: case 57:
 this.$ = null 
break;
case 7: case 11: case 13: case 15: case 17: case 19: case 21: case 23:
 this.$ = true 
break;
case 25:
 $$[$0].type = 'SelectExpr'; this.$.push($$[$0]); 
break;
case 26:
 $$[$0].type = 'SelectExpr'; this.$ = [ $$[$0] ]; 
break;
case 27: case 28:
 this.$ = { value: $$[$0] } 
break;
case 29:
 this.$ = $$[$0-1]; this.$.alias = $$[$0].alias; this.$.hasAs = $$[$0].hasAs; 
break;
case 30:
 this.$ = {alias: null, hasAs: null} 
break;
case 31:
 this.$ = {alias: $$[$0], hasAs: true} 
break;
case 32:
 this.$ = {alias: $$[$0], hasAs: false} 
break;
case 33: case 34:
 this.$ = { type: 'String', value: $$[$0] } 
break;
case 35: case 36: case 37:
 this.$ = { type: 'Number', value: $$[$0] } 
break;
case 38:
 this.$ = { type: 'Boolean', value: 'TRUE' } 
break;
case 39:
 this.$ = { type: 'Boolean', value: 'FALSE' } 
break;
case 40:
 this.$ = { type: 'Null', value: 'null' } 
break;
case 45:
 this.$ = {type: 'FunctionCall', name: $$[$0-3], params: $$[$0-1]} 
break;
case 46:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 47:
 this.$ = [$$[$0]]; 
break;
case 52:
 this.$ = { type: 'Identifier', value: $$[$0] } 
break;
case 55:
 this.$ = { type: 'WhenThenList', value: [ { when: $$[$0-2], then: $$[$0] } ] }; 
break;
case 56:
 this.$ = $$[$0-4]; this.$.value.push({ when: $$[$0-2], then: $$[$0] }); 
break;
case 59:
 this.$ = { type: 'CaseWhen', caseExpr: $$[$0-3], whenThenList: $$[$0-2], else: $$[$0-1] } 
break;
case 60: case 61: case 62: case 63: case 64:
 this.$ = $$[$0]; if (!this.$.prefix) this.$.prefix = [ $$[$0-1] ]; else this.$.prefix.push($$[$0-1]); 
break;
case 69:
 this.$ = $$[$0-1]; this.$.hasParentheses = true; 
break;
case 70:
 this.$ = $$[$0-1]; this.$.hasParentheses = true; this.$.hasRow = true; 
break;
case 71: case 72:
 this.$ = { type: 'SubQuery', value: $$[$0-1] } 
break;
case 75: case 79: case 80: case 81: case 82:
 this.$ = { type: 'BitExpression', operator: '|', left: $$[$0-2], right: $$[$0] } 
break;
case 76:
 this.$ = { type: 'BitExpression', operator: '&', left: $$[$0-2], right: $$[$0] } 
break;
case 77:
 this.$ = { type: 'BitExpression', operator: '<<', left: $$[$0-2], right: $$[$0] } 
break;
case 78:
 this.$ = { type: 'BitExpression', operator: '>>', left: $$[$0-2], right: $$[$0] } 
break;
case 83:
 this.$ = { type: 'BitExpression', operator: 'DIV', left: $$[$0-2], right: $$[$0] } 
break;
case 84:
 this.$ = { type: 'BitExpression', operator: 'MOD', left: $$[$0-2], right: $$[$0] } 
break;
case 85:
 this.$ = { type: 'BitExpression', operator: '%', left: $$[$0-2], right: $$[$0] } 
break;
case 86:
 this.$ = { type: 'BitExpression', operator: '^', left: $$[$0-2], right: $$[$0] } 
break;
case 90:
 this.$ = { type: 'ExpressionList', value: [ $$[$0] ] } 
break;
case 91:
 this.$ = $$[$0-2]; this.$.value.push($$[$0]); 
break;
}
},
table: [{3:1,4:2,6:$V0},{1:[3]},{5:[1,4]},o($V1,[2,6],{7:5,18:[1,6],19:[1,7],20:[1,8]}),{1:[2,1]},o($V2,[2,8],{8:9,21:[1,10]}),o($V1,[2,3]),o($V1,[2,4]),o($V1,[2,5]),o($V3,[2,10],{9:11,22:[1,12]}),o($V2,[2,7]),o($V4,[2,12],{10:13,25:[1,14]}),{23:[1,15]},o($V5,[2,14],{11:16,26:[1,17]}),o($V4,[2,11]),{24:[1,18]},o($V6,[2,16],{12:19,27:[1,20]}),o($V5,[2,13]),o($V3,[2,9]),o($V7,[2,18],{13:21,28:[1,22]}),o($V6,[2,15]),o($V8,[2,20],{14:23,29:[1,24]}),o($V7,[2,17]),o($V9,[2,22],{15:25,30:[1,26]}),o($V8,[2,19]),o($Va,[2,24],{16:27,31:[1,28]}),o($V9,[2,21]),{17:29,24:$Vb,33:30,34:$Vc,35:$Vd,36:33,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},o($Va,[2,23]),o([5,55],[2,2],{32:[1,65]}),o($Vv,[2,26]),o($Vv,[2,27]),o($Vv,[2,28]),o($Vv,[2,30],{37:66,38:[1,67],39:[1,68]}),o($Vw,[2,89]),o($Vw,[2,88]),o($Vw,[2,87]),o($Vw,[2,74],{34:[1,75],68:[1,73],70:[1,74],78:[1,69],79:[1,70],80:[1,71],81:[1,72],82:[1,76],83:[1,77],84:[1,78],85:[1,79],86:[1,80]}),o($Vx,[2,65]),o($Vx,[2,66]),o($Vx,[2,67]),o($Vx,[2,68]),{4:82,6:$V0,24:$Vb,36:83,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,74:81,75:$Vt,76:$Vu,77:36,87:35,88:34},{53:[1,84]},{53:[1,85]},o($Vx,[2,73]),o($Vx,[2,41]),o($Vx,[2,42]),o($Vx,[2,43]),o($Vx,[2,44]),o($Vx,[2,52],{53:[1,86]}),{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:87,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:88,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:89,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:90,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:91,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu},{24:$Vb,36:93,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,58:92,60:[2,53],64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},o($Vx,[2,33]),o($Vx,[2,34]),o($Vx,[2,35]),o($Vx,[2,36]),o($Vx,[2,37]),o($Vx,[2,38]),o($Vx,[2,39]),o($Vx,[2,40]),{24:$Vb,33:94,34:$Vc,35:$Vd,36:33,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},o($Vv,[2,29]),{39:[1,95]},o($Vv,[2,32]),{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:96},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:97},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:98},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:99},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:100},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:101},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:102},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:103},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:104},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:105},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:106},{24:$Vb,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:107},{32:$Vy,55:[1,108]},{55:[1,110]},o($Vz,[2,90]),{24:$Vb,36:83,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,74:111,75:$Vt,76:$Vu,77:36,87:35,88:34},{4:112,6:$V0},o($Vz,$VA,{88:34,87:35,77:36,69:37,51:38,57:39,52:40,67:41,64:45,40:46,43:47,46:48,49:49,54:113,56:114,36:117,24:$Vb,34:$VB,35:$VC,39:$Ve,41:$Vf,42:$Vg,44:$Vh,45:$Vi,47:$Vj,48:$Vk,50:$Vl,53:$Vm,65:$Vn,68:$Vo,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu}),o($Vx,[2,60]),o($Vx,[2,61]),o($Vx,[2,62]),o($Vx,[2,63]),o($Vx,[2,64]),{59:118,60:[1,119]},{60:[2,54]},o($Vv,[2,25]),o($Vv,[2,31]),o($Vw,[2,75]),o($Vw,[2,76]),o($Vw,[2,77]),o($Vw,[2,78]),o($Vw,[2,79]),o($Vw,[2,80]),o($Vw,[2,81]),o($Vw,[2,82]),o($Vw,[2,83]),o($Vw,[2,84]),o($Vw,[2,85]),o($Vw,[2,86]),o($Vx,[2,69]),{24:$Vb,36:120,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},o($Vx,[2,71]),{32:$Vy,55:[1,121]},{55:[1,122]},{32:[1,124],55:[1,123]},o($Vz,[2,47]),o($Vz,[2,49]),o($Vz,[2,50]),o($Vz,[2,51]),{60:[1,126],62:125,63:[1,127],66:[2,57]},{24:$Vb,36:128,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},o($Vz,[2,91]),o($Vx,[2,70]),o($Vx,[2,72]),o($Vx,[2,45]),o($Vz,$VA,{88:34,87:35,77:36,69:37,51:38,57:39,52:40,67:41,64:45,40:46,43:47,46:48,49:49,36:117,56:129,24:$Vb,34:$VB,35:$VC,39:$Ve,41:$Vf,42:$Vg,44:$Vh,45:$Vi,47:$Vj,48:$Vk,50:$Vl,53:$Vm,65:$Vn,68:$Vo,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu}),{66:[1,130]},{24:$Vb,36:131,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},{24:$Vb,36:132,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},{61:[1,133]},o($Vz,[2,46]),o($Vx,[2,59]),{61:[1,134]},{66:[2,58]},{24:$Vb,36:135,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},{24:$Vb,36:136,39:$Ve,40:46,41:$Vf,42:$Vg,43:47,44:$Vh,45:$Vi,46:48,47:$Vj,48:$Vk,49:49,50:$Vl,51:38,52:40,53:$Vm,57:39,64:45,65:$Vn,67:41,68:$Vo,69:37,70:$Vp,71:$Vq,72:$Vr,73:$Vs,75:$Vt,76:$Vu,77:36,87:35,88:34},o($VD,[2,55]),o($VD,[2,56])],
defaultActions: {4:[2,1],93:[2,54],132:[2,58]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:/* skip sql comments */
break;
case 2:/* skip sql comments */
break;
case 3:/* skip whitespace */
break;
case 4:return 6
break;
case 5:return 18
break;
case 6:return 19
break;
case 7:return 20
break;
case 8:return 21
break;
case 9:return 22
break;
case 10:return 25
break;
case 11:return 26
break;
case 12:return 27
break;
case 13:return 28
break;
case 14:return 29
break;
case 15:return 30
break;
case 16:return 31
break;
case 17:return 34;
break;
case 18:return 35
break;
case 19:return 38
break;
case 20:return 47
break;
case 21:return 48
break;
case 22:return 50
break;
case 23:return 'COLLATE'
break;
case 24:return 73
break;
case 25:return 75
break;
case 26:return 76
break;
case 27:return 65
break;
case 28:return 60
break;
case 29:return 61
break;
case 30:return 63
break;
case 31:return 66
break;
case 32:return 83
break;
case 33:return 84
break;
case 34:return 32
break;
case 35:return 23
break;
case 36:return 53
break;
case 37:return 55
break;
case 38:return 71
break;
case 39:return 72
break;
case 40:return 78
break;
case 41:return 79
break;
case 42:return 80
break;
case 43:return 81
break;
case 44:return 68
break;
case 45:return 70
break;
case 46:return 34
break;
case 47:return 82
break;
case 48:return 85
break;
case 49:return 86
break;
case 50:return 42
break;
case 51:return 42
break;
case 52:return 45
break;
case 53:return 24
break;
case 54:return 44
break;
case 55:return 39
break;
case 56:return 41
break;
case 57:return 5
break;
case 58:return 'INVALID'
break;
}
},
rules: [/^(?:[\/][*](.|\n)*?[*][\/])/i,/^(?:[-][-]\s.*\n)/i,/^(?:[#]\s.*\n)/i,/^(?:\s+)/i,/^(?:SELECT\b)/i,/^(?:ALL\b)/i,/^(?:DISTINCT\b)/i,/^(?:DISTINCTROW\b)/i,/^(?:HIGH_PRIORITY\b)/i,/^(?:MAX_STATEMENT_TIME\b)/i,/^(?:STRAIGHT_JOIN\b)/i,/^(?:SQL_SMALL_RESULT\b)/i,/^(?:SQL_BIG_RESULT\b)/i,/^(?:SQL_BUFFER_RESULT\b)/i,/^(?:SQL_CACHE\b)/i,/^(?:SQL_NO_CACHE\b)/i,/^(?:SQL_CALC_FOUND_ROWS\b)/i,/^(?:\*)/i,/^(?:([a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]+\.){1,2}\*)/i,/^(?:AS\b)/i,/^(?:TRUE\b)/i,/^(?:FALSE\b)/i,/^(?:NULL\b)/i,/^(?:COLLATE\b)/i,/^(?:BINARY\b)/i,/^(?:ROW\b)/i,/^(?:EXISTS\b)/i,/^(?:CASE\b)/i,/^(?:WHEN\b)/i,/^(?:THEN\b)/i,/^(?:ELSE\b)/i,/^(?:END\b)/i,/^(?:DIV\b)/i,/^(?:MOD\b)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:~)/i,/^(?:!)/i,/^(?:\|)/i,/^(?:&)/i,/^(?:<<)/i,/^(?:>>)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\^)/i,/^(?:['](\\.|[^'])*['])/i,/^(?:["](\\.|[^"])*["])/i,/^(?:[0][x][0-9a-fA-F]+)/i,/^(?:[-]?[0-9]+(\.[0-9]+)?)/i,/^(?:[-]?[0-9]+(\.[0-9]+)?[eE][-][0-9]+(\.[0-9]+)?)/i,/^(?:[a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*)/i,/^(?:['"][a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*["'])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
var root = this
// AMD / RequireJS
if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
        return sqlParser;
    });
}
// Node.js
else if (typeof module !== 'undefined' && module.exports) {
    module.exports = sqlParser;
}
// included directly via <script> tag
else {
    root.sqlParser = sqlParser;
}

