function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// THIS FILE IS AUTOGENERATED
// see scripts/generateNodeUtils.js
function isTypeOf(t) {
  return function (n) {
    return n.type === t;
  };
}

function assertTypeOf(t) {
  return function (n) {
    return function () {
      if (!(n.type === t)) {
        throw new Error('n.type === t' + " error: " + (undefined || "unknown"));
      }
    }();
  };
}

export function module(id, fields, metadata) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
  }

  if (!(_typeof(fields) === "object" && typeof fields.length !== "undefined")) {
    throw new Error('typeof fields === "object" && typeof fields.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Module",
    id: id,
    fields: fields
  };

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}
export function moduleMetadata(sections, functionNames, localNames, producers) {
  if (!(_typeof(sections) === "object" && typeof sections.length !== "undefined")) {
    throw new Error('typeof sections === "object" && typeof sections.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (functionNames !== null && functionNames !== undefined) {
    if (!(_typeof(functionNames) === "object" && typeof functionNames.length !== "undefined")) {
      throw new Error('typeof functionNames === "object" && typeof functionNames.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  if (localNames !== null && localNames !== undefined) {
    if (!(_typeof(localNames) === "object" && typeof localNames.length !== "undefined")) {
      throw new Error('typeof localNames === "object" && typeof localNames.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  if (producers !== null && producers !== undefined) {
    if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
      throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "ModuleMetadata",
    sections: sections
  };

  if (typeof functionNames !== "undefined" && functionNames.length > 0) {
    node.functionNames = functionNames;
  }

  if (typeof localNames !== "undefined" && localNames.length > 0) {
    node.localNames = localNames;
  }

  if (typeof producers !== "undefined" && producers.length > 0) {
    node.producers = producers;
  }

  return node;
}
export function moduleNameMetadata(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "ModuleNameMetadata",
    value: value
  };
  return node;
}
export function functionNameMetadata(value, index) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  if (!(typeof index === "number")) {
    throw new Error('typeof index === "number"' + " error: " + ("Argument index must be of type number, given: " + _typeof(index) || "unknown"));
  }

  var node = {
    type: "FunctionNameMetadata",
    value: value,
    index: index
  };
  return node;
}
export function localNameMetadata(value, localIndex, functionIndex) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  if (!(typeof localIndex === "number")) {
    throw new Error('typeof localIndex === "number"' + " error: " + ("Argument localIndex must be of type number, given: " + _typeof(localIndex) || "unknown"));
  }

  if (!(typeof functionIndex === "number")) {
    throw new Error('typeof functionIndex === "number"' + " error: " + ("Argument functionIndex must be of type number, given: " + _typeof(functionIndex) || "unknown"));
  }

  var node = {
    type: "LocalNameMetadata",
    value: value,
    localIndex: localIndex,
    functionIndex: functionIndex
  };
  return node;
}
export function binaryModule(id, blob) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
  }

  if (!(_typeof(blob) === "object" && typeof blob.length !== "undefined")) {
    throw new Error('typeof blob === "object" && typeof blob.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "BinaryModule",
    id: id,
    blob: blob
  };
  return node;
}
export function quoteModule(id, string) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
  }

  if (!(_typeof(string) === "object" && typeof string.length !== "undefined")) {
    throw new Error('typeof string === "object" && typeof string.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "QuoteModule",
    id: id,
    string: string
  };
  return node;
}
export function sectionMetadata(section, startOffset, size, vectorOfSize) {
  if (!(typeof startOffset === "number")) {
    throw new Error('typeof startOffset === "number"' + " error: " + ("Argument startOffset must be of type number, given: " + _typeof(startOffset) || "unknown"));
  }

  var node = {
    type: "SectionMetadata",
    section: section,
    startOffset: startOffset,
    size: size,
    vectorOfSize: vectorOfSize
  };
  return node;
}
export function producersSectionMetadata(producers) {
  if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
    throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ProducersSectionMetadata",
    producers: producers
  };
  return node;
}
export function producerMetadata(language, processedBy, sdk) {
  if (!(_typeof(language) === "object" && typeof language.length !== "undefined")) {
    throw new Error('typeof language === "object" && typeof language.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(processedBy) === "object" && typeof processedBy.length !== "undefined")) {
    throw new Error('typeof processedBy === "object" && typeof processedBy.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(sdk) === "object" && typeof sdk.length !== "undefined")) {
    throw new Error('typeof sdk === "object" && typeof sdk.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ProducerMetadata",
    language: language,
    processedBy: processedBy,
    sdk: sdk
  };
  return node;
}
export function producerMetadataVersionedName(name, version) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
  }

  if (!(typeof version === "string")) {
    throw new Error('typeof version === "string"' + " error: " + ("Argument version must be of type string, given: " + _typeof(version) || "unknown"));
  }

  var node = {
    type: "ProducerMetadataVersionedName",
    name: name,
    version: version
  };
  return node;
}
export function loopInstruction(label, resulttype, instr) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "LoopInstruction",
    id: "loop",
    label: label,
    resulttype: resulttype,
    instr: instr
  };
  return node;
}
export function instr(id, object, args, namedArgs) {
  if (!(typeof id === "string")) {
    throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
  }

  if (!(_typeof(args) === "object" && typeof args.length !== "undefined")) {
    throw new Error('typeof args === "object" && typeof args.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Instr",
    id: id,
    args: args
  };

  if (typeof object !== "undefined") {
    node.object = object;
  }

  if (typeof namedArgs !== "undefined" && Object.keys(namedArgs).length !== 0) {
    node.namedArgs = namedArgs;
  }

  return node;
}
export function ifInstruction(testLabel, test, result, consequent, alternate) {
  if (!(_typeof(test) === "object" && typeof test.length !== "undefined")) {
    throw new Error('typeof test === "object" && typeof test.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(consequent) === "object" && typeof consequent.length !== "undefined")) {
    throw new Error('typeof consequent === "object" && typeof consequent.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(alternate) === "object" && typeof alternate.length !== "undefined")) {
    throw new Error('typeof alternate === "object" && typeof alternate.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "IfInstruction",
    id: "if",
    testLabel: testLabel,
    test: test,
    result: result,
    consequent: consequent,
    alternate: alternate
  };
  return node;
}
export function stringLiteral(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "StringLiteral",
    value: value
  };
  return node;
}
export function numberLiteral(value, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
  }

  var node = {
    type: "NumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}
export function longNumberLiteral(value, raw) {
  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
  }

  var node = {
    type: "LongNumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}
export function floatLiteral(value, nan, inf, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
  }

  if (nan !== null && nan !== undefined) {
    if (!(typeof nan === "boolean")) {
      throw new Error('typeof nan === "boolean"' + " error: " + ("Argument nan must be of type boolean, given: " + _typeof(nan) || "unknown"));
    }
  }

  if (inf !== null && inf !== undefined) {
    if (!(typeof inf === "boolean")) {
      throw new Error('typeof inf === "boolean"' + " error: " + ("Argument inf must be of type boolean, given: " + _typeof(inf) || "unknown"));
    }
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
  }

  var node = {
    type: "FloatLiteral",
    value: value,
    raw: raw
  };

  if (nan === true) {
    node.nan = true;
  }

  if (inf === true) {
    node.inf = true;
  }

  return node;
}
export function elem(table, offset, funcs) {
  if (!(_typeof(offset) === "object" && typeof offset.length !== "undefined")) {
    throw new Error('typeof offset === "object" && typeof offset.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(funcs) === "object" && typeof funcs.length !== "undefined")) {
    throw new Error('typeof funcs === "object" && typeof funcs.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Elem",
    table: table,
    offset: offset,
    funcs: funcs
  };
  return node;
}
export function indexInFuncSection(index) {
  var node = {
    type: "IndexInFuncSection",
    index: index
  };
  return node;
}
export function valtypeLiteral(name) {
  var node = {
    type: "ValtypeLiteral",
    name: name
  };
  return node;
}
export function typeInstruction(id, functype) {
  var node = {
    type: "TypeInstruction",
    id: id,
    functype: functype
  };
  return node;
}
export function start(index) {
  var node = {
    type: "Start",
    index: index
  };
  return node;
}
export function globalType(valtype, mutability) {
  var node = {
    type: "GlobalType",
    valtype: valtype,
    mutability: mutability
  };
  return node;
}
export function leadingComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "LeadingComment",
    value: value
  };
  return node;
}
export function blockComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "BlockComment",
    value: value
  };
  return node;
}
export function data(memoryIndex, offset, init) {
  var node = {
    type: "Data",
    memoryIndex: memoryIndex,
    offset: offset,
    init: init
  };
  return node;
}
export function global(globalType, init, name) {
  if (!(_typeof(init) === "object" && typeof init.length !== "undefined")) {
    throw new Error('typeof init === "object" && typeof init.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Global",
    globalType: globalType,
    init: init,
    name: name
  };
  return node;
}
export function table(elementType, limits, name, elements) {
  if (!(limits.type === "Limit")) {
    throw new Error('limits.type === "Limit"' + " error: " + ("Argument limits must be of type Limit, given: " + limits.type || "unknown"));
  }

  if (elements !== null && elements !== undefined) {
    if (!(_typeof(elements) === "object" && typeof elements.length !== "undefined")) {
      throw new Error('typeof elements === "object" && typeof elements.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "Table",
    elementType: elementType,
    limits: limits,
    name: name
  };

  if (typeof elements !== "undefined" && elements.length > 0) {
    node.elements = elements;
  }

  return node;
}
export function memory(limits, id) {
  var node = {
    type: "Memory",
    limits: limits,
    id: id
  };
  return node;
}
export function funcImportDescr(id, signature) {
  var node = {
    type: "FuncImportDescr",
    id: id,
    signature: signature
  };
  return node;
}
export function moduleImport(module, name, descr) {
  if (!(typeof module === "string")) {
    throw new Error('typeof module === "string"' + " error: " + ("Argument module must be of type string, given: " + _typeof(module) || "unknown"));
  }

  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
  }

  var node = {
    type: "ModuleImport",
    module: module,
    name: name,
    descr: descr
  };
  return node;
}
export function moduleExportDescr(exportType, id) {
  var node = {
    type: "ModuleExportDescr",
    exportType: exportType,
    id: id
  };
  return node;
}
export function moduleExport(name, descr) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
  }

  var node = {
    type: "ModuleExport",
    name: name,
    descr: descr
  };
  return node;
}
export function limit(min, max, shared) {
  if (!(typeof min === "number")) {
    throw new Error('typeof min === "number"' + " error: " + ("Argument min must be of type number, given: " + _typeof(min) || "unknown"));
  }

  if (max !== null && max !== undefined) {
    if (!(typeof max === "number")) {
      throw new Error('typeof max === "number"' + " error: " + ("Argument max must be of type number, given: " + _typeof(max) || "unknown"));
    }
  }

  if (shared !== null && shared !== undefined) {
    if (!(typeof shared === "boolean")) {
      throw new Error('typeof shared === "boolean"' + " error: " + ("Argument shared must be of type boolean, given: " + _typeof(shared) || "unknown"));
    }
  }

  var node = {
    type: "Limit",
    min: min
  };

  if (typeof max !== "undefined") {
    node.max = max;
  }

  if (shared === true) {
    node.shared = true;
  }

  return node;
}
export function signature(params, results) {
  if (!(_typeof(params) === "object" && typeof params.length !== "undefined")) {
    throw new Error('typeof params === "object" && typeof params.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(results) === "object" && typeof results.length !== "undefined")) {
    throw new Error('typeof results === "object" && typeof results.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Signature",
    params: params,
    results: results
  };
  return node;
}
export function program(body) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Program",
    body: body
  };
  return node;
}
export function identifier(value, raw) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  if (raw !== null && raw !== undefined) {
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
    }
  }

  var node = {
    type: "Identifier",
    value: value
  };

  if (typeof raw !== "undefined") {
    node.raw = raw;
  }

  return node;
}
export function blockInstruction(label, instr, result) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "BlockInstruction",
    id: "block",
    label: label,
    instr: instr,
    result: result
  };
  return node;
}
export function callInstruction(index, instrArgs, numeric) {
  if (instrArgs !== null && instrArgs !== undefined) {
    if (!(_typeof(instrArgs) === "object" && typeof instrArgs.length !== "undefined")) {
      throw new Error('typeof instrArgs === "object" && typeof instrArgs.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "CallInstruction",
    id: "call",
    index: index
  };

  if (typeof instrArgs !== "undefined" && instrArgs.length > 0) {
    node.instrArgs = instrArgs;
  }

  if (typeof numeric !== "undefined") {
    node.numeric = numeric;
  }

  return node;
}
export function callIndirectInstruction(signature, intrs) {
  if (intrs !== null && intrs !== undefined) {
    if (!(_typeof(intrs) === "object" && typeof intrs.length !== "undefined")) {
      throw new Error('typeof intrs === "object" && typeof intrs.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "CallIndirectInstruction",
    id: "call_indirect",
    signature: signature
  };

  if (typeof intrs !== "undefined" && intrs.length > 0) {
    node.intrs = intrs;
  }

  return node;
}
export function byteArray(values) {
  if (!(_typeof(values) === "object" && typeof values.length !== "undefined")) {
    throw new Error('typeof values === "object" && typeof values.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ByteArray",
    values: values
  };
  return node;
}
export function func(name, signature, body, isExternal, metadata) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (isExternal !== null && isExternal !== undefined) {
    if (!(typeof isExternal === "boolean")) {
      throw new Error('typeof isExternal === "boolean"' + " error: " + ("Argument isExternal must be of type boolean, given: " + _typeof(isExternal) || "unknown"));
    }
  }

  var node = {
    type: "Func",
    name: name,
    signature: signature,
    body: body
  };

  if (isExternal === true) {
    node.isExternal = true;
  }

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}
export function internalBrUnless(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
  }

  var node = {
    type: "InternalBrUnless",
    target: target
  };
  return node;
}
export function internalGoto(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
  }

  var node = {
    type: "InternalGoto",
    target: target
  };
  return node;
}
export function internalCallExtern(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
  }

  var node = {
    type: "InternalCallExtern",
    target: target
  };
  return node;
}
export function internalEndAndReturn() {
  var node = {
    type: "InternalEndAndReturn"
  };
  return node;
}
export var isModule = isTypeOf("Module");
export var isModuleMetadata = isTypeOf("ModuleMetadata");
export var isModuleNameMetadata = isTypeOf("ModuleNameMetadata");
export var isFunctionNameMetadata = isTypeOf("FunctionNameMetadata");
export var isLocalNameMetadata = isTypeOf("LocalNameMetadata");
export var isBinaryModule = isTypeOf("BinaryModule");
export var isQuoteModule = isTypeOf("QuoteModule");
export var isSectionMetadata = isTypeOf("SectionMetadata");
export var isProducersSectionMetadata = isTypeOf("ProducersSectionMetadata");
export var isProducerMetadata = isTypeOf("ProducerMetadata");
export var isProducerMetadataVersionedName = isTypeOf("ProducerMetadataVersionedName");
export var isLoopInstruction = isTypeOf("LoopInstruction");
export var isInstr = isTypeOf("Instr");
export var isIfInstruction = isTypeOf("IfInstruction");
export var isStringLiteral = isTypeOf("StringLiteral");
export var isNumberLiteral = isTypeOf("NumberLiteral");
export var isLongNumberLiteral = isTypeOf("LongNumberLiteral");
export var isFloatLiteral = isTypeOf("FloatLiteral");
export var isElem = isTypeOf("Elem");
export var isIndexInFuncSection = isTypeOf("IndexInFuncSection");
export var isValtypeLiteral = isTypeOf("ValtypeLiteral");
export var isTypeInstruction = isTypeOf("TypeInstruction");
export var isStart = isTypeOf("Start");
export var isGlobalType = isTypeOf("GlobalType");
export var isLeadingComment = isTypeOf("LeadingComment");
export var isBlockComment = isTypeOf("BlockComment");
export var isData = isTypeOf("Data");
export var isGlobal = isTypeOf("Global");
export var isTable = isTypeOf("Table");
export var isMemory = isTypeOf("Memory");
export var isFuncImportDescr = isTypeOf("FuncImportDescr");
export var isModuleImport = isTypeOf("ModuleImport");
export var isModuleExportDescr = isTypeOf("ModuleExportDescr");
export var isModuleExport = isTypeOf("ModuleExport");
export var isLimit = isTypeOf("Limit");
export var isSignature = isTypeOf("Signature");
export var isProgram = isTypeOf("Program");
export var isIdentifier = isTypeOf("Identifier");
export var isBlockInstruction = isTypeOf("BlockInstruction");
export var isCallInstruction = isTypeOf("CallInstruction");
export var isCallIndirectInstruction = isTypeOf("CallIndirectInstruction");
export var isByteArray = isTypeOf("ByteArray");
export var isFunc = isTypeOf("Func");
export var isInternalBrUnless = isTypeOf("InternalBrUnless");
export var isInternalGoto = isTypeOf("InternalGoto");
export var isInternalCallExtern = isTypeOf("InternalCallExtern");
export var isInternalEndAndReturn = isTypeOf("InternalEndAndReturn");
export var isNode = function isNode(node) {
  return isModule(node) || isModuleMetadata(node) || isModuleNameMetadata(node) || isFunctionNameMetadata(node) || isLocalNameMetadata(node) || isBinaryModule(node) || isQuoteModule(node) || isSectionMetadata(node) || isProducersSectionMetadata(node) || isProducerMetadata(node) || isProducerMetadataVersionedName(node) || isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isElem(node) || isIndexInFuncSection(node) || isValtypeLiteral(node) || isTypeInstruction(node) || isStart(node) || isGlobalType(node) || isLeadingComment(node) || isBlockComment(node) || isData(node) || isGlobal(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node) || isModuleImport(node) || isModuleExportDescr(node) || isModuleExport(node) || isLimit(node) || isSignature(node) || isProgram(node) || isIdentifier(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node) || isByteArray(node) || isFunc(node) || isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};
export var isBlock = function isBlock(node) {
  return isLoopInstruction(node) || isBlockInstruction(node) || isFunc(node);
};
export var isInstruction = function isInstruction(node) {
  return isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isTypeInstruction(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node);
};
export var isExpression = function isExpression(node) {
  return isInstr(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isValtypeLiteral(node) || isIdentifier(node);
};
export var isNumericLiteral = function isNumericLiteral(node) {
  return isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node);
};
export var isImportDescr = function isImportDescr(node) {
  return isGlobalType(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node);
};
export var isIntrinsic = function isIntrinsic(node) {
  return isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};
export var assertModule = assertTypeOf("Module");
export var assertModuleMetadata = assertTypeOf("ModuleMetadata");
export var assertModuleNameMetadata = assertTypeOf("ModuleNameMetadata");
export var assertFunctionNameMetadata = assertTypeOf("FunctionNameMetadata");
export var assertLocalNameMetadata = assertTypeOf("LocalNameMetadata");
export var assertBinaryModule = assertTypeOf("BinaryModule");
export var assertQuoteModule = assertTypeOf("QuoteModule");
export var assertSectionMetadata = assertTypeOf("SectionMetadata");
export var assertProducersSectionMetadata = assertTypeOf("ProducersSectionMetadata");
export var assertProducerMetadata = assertTypeOf("ProducerMetadata");
export var assertProducerMetadataVersionedName = assertTypeOf("ProducerMetadataVersionedName");
export var assertLoopInstruction = assertTypeOf("LoopInstruction");
export var assertInstr = assertTypeOf("Instr");
export var assertIfInstruction = assertTypeOf("IfInstruction");
export var assertStringLiteral = assertTypeOf("StringLiteral");
export var assertNumberLiteral = assertTypeOf("NumberLiteral");
export var assertLongNumberLiteral = assertTypeOf("LongNumberLiteral");
export var assertFloatLiteral = assertTypeOf("FloatLiteral");
export var assertElem = assertTypeOf("Elem");
export var assertIndexInFuncSection = assertTypeOf("IndexInFuncSection");
export var assertValtypeLiteral = assertTypeOf("ValtypeLiteral");
export var assertTypeInstruction = assertTypeOf("TypeInstruction");
export var assertStart = assertTypeOf("Start");
export var assertGlobalType = assertTypeOf("GlobalType");
export var assertLeadingComment = assertTypeOf("LeadingComment");
export var assertBlockComment = assertTypeOf("BlockComment");
export var assertData = assertTypeOf("Data");
export var assertGlobal = assertTypeOf("Global");
export var assertTable = assertTypeOf("Table");
export var assertMemory = assertTypeOf("Memory");
export var assertFuncImportDescr = assertTypeOf("FuncImportDescr");
export var assertModuleImport = assertTypeOf("ModuleImport");
export var assertModuleExportDescr = assertTypeOf("ModuleExportDescr");
export var assertModuleExport = assertTypeOf("ModuleExport");
export var assertLimit = assertTypeOf("Limit");
export var assertSignature = assertTypeOf("Signature");
export var assertProgram = assertTypeOf("Program");
export var assertIdentifier = assertTypeOf("Identifier");
export var assertBlockInstruction = assertTypeOf("BlockInstruction");
export var assertCallInstruction = assertTypeOf("CallInstruction");
export var assertCallIndirectInstruction = assertTypeOf("CallIndirectInstruction");
export var assertByteArray = assertTypeOf("ByteArray");
export var assertFunc = assertTypeOf("Func");
export var assertInternalBrUnless = assertTypeOf("InternalBrUnless");
export var assertInternalGoto = assertTypeOf("InternalGoto");
export var assertInternalCallExtern = assertTypeOf("InternalCallExtern");
export var assertInternalEndAndReturn = assertTypeOf("InternalEndAndReturn");
export var unionTypesMap = {
  Module: ["Node"],
  ModuleMetadata: ["Node"],
  ModuleNameMetadata: ["Node"],
  FunctionNameMetadata: ["Node"],
  LocalNameMetadata: ["Node"],
  BinaryModule: ["Node"],
  QuoteModule: ["Node"],
  SectionMetadata: ["Node"],
  ProducersSectionMetadata: ["Node"],
  ProducerMetadata: ["Node"],
  ProducerMetadataVersionedName: ["Node"],
  LoopInstruction: ["Node", "Block", "Instruction"],
  Instr: ["Node", "Expression", "Instruction"],
  IfInstruction: ["Node", "Instruction"],
  StringLiteral: ["Node", "Expression"],
  NumberLiteral: ["Node", "NumericLiteral", "Expression"],
  LongNumberLiteral: ["Node", "NumericLiteral", "Expression"],
  FloatLiteral: ["Node", "NumericLiteral", "Expression"],
  Elem: ["Node"],
  IndexInFuncSection: ["Node"],
  ValtypeLiteral: ["Node", "Expression"],
  TypeInstruction: ["Node", "Instruction"],
  Start: ["Node"],
  GlobalType: ["Node", "ImportDescr"],
  LeadingComment: ["Node"],
  BlockComment: ["Node"],
  Data: ["Node"],
  Global: ["Node"],
  Table: ["Node", "ImportDescr"],
  Memory: ["Node", "ImportDescr"],
  FuncImportDescr: ["Node", "ImportDescr"],
  ModuleImport: ["Node"],
  ModuleExportDescr: ["Node"],
  ModuleExport: ["Node"],
  Limit: ["Node"],
  Signature: ["Node"],
  Program: ["Node"],
  Identifier: ["Node", "Expression"],
  BlockInstruction: ["Node", "Block", "Instruction"],
  CallInstruction: ["Node", "Instruction"],
  CallIndirectInstruction: ["Node", "Instruction"],
  ByteArray: ["Node"],
  Func: ["Node", "Block"],
  InternalBrUnless: ["Node", "Intrinsic"],
  InternalGoto: ["Node", "Intrinsic"],
  InternalCallExtern: ["Node", "Intrinsic"],
  InternalEndAndReturn: ["Node", "Intrinsic"]
};
export var nodeAndUnionTypes = ["Module", "ModuleMetadata", "ModuleNameMetadata", "FunctionNameMetadata", "LocalNameMetadata", "BinaryModule", "QuoteModule", "SectionMetadata", "ProducersSectionMetadata", "ProducerMetadata", "ProducerMetadataVersionedName", "LoopInstruction", "Instr", "IfInstruction", "StringLiteral", "NumberLiteral", "LongNumberLiteral", "FloatLiteral", "Elem", "IndexInFuncSection", "ValtypeLiteral", "TypeInstruction", "Start", "GlobalType", "LeadingComment", "BlockComment", "Data", "Global", "Table", "Memory", "FuncImportDescr", "ModuleImport", "ModuleExportDescr", "ModuleExport", "Limit", "Signature", "Program", "Identifier", "BlockInstruction", "CallInstruction", "CallIndirectInstruction", "ByteArray", "Func", "InternalBrUnless", "InternalGoto", "InternalCallExtern", "InternalEndAndReturn", "Node", "Block", "Instruction", "Expression", "NumericLiteral", "ImportDescr", "Intrinsic"];