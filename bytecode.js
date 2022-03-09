{
	"functionDebugData": {
		"@_11": {
			"entryPoint": null,
			"id": 11,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"extract_byte_array_length": {
			"entryPoint": 261,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"panic_error_0x22": {
			"entryPoint": 311,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		}
	},
	"generatedSources": [
		{
			"ast": {
				"nodeType": "YulBlock",
				"src": "0:516:1",
				"statements": [
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "58:269:1",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "68:22:1",
									"value": {
										"arguments": [
											{
												"name": "data",
												"nodeType": "YulIdentifier",
												"src": "82:4:1"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "88:1:1",
												"type": "",
												"value": "2"
											}
										],
										"functionName": {
											"name": "div",
											"nodeType": "YulIdentifier",
											"src": "78:3:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "78:12:1"
									},
									"variableNames": [
										{
											"name": "length",
											"nodeType": "YulIdentifier",
											"src": "68:6:1"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "99:38:1",
									"value": {
										"arguments": [
											{
												"name": "data",
												"nodeType": "YulIdentifier",
												"src": "129:4:1"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "135:1:1",
												"type": "",
												"value": "1"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "125:3:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "125:12:1"
									},
									"variables": [
										{
											"name": "outOfPlaceEncoding",
											"nodeType": "YulTypedName",
											"src": "103:18:1",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "176:51:1",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "190:27:1",
												"value": {
													"arguments": [
														{
															"name": "length",
															"nodeType": "YulIdentifier",
															"src": "204:6:1"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "212:4:1",
															"type": "",
															"value": "0x7f"
														}
													],
													"functionName": {
														"name": "and",
														"nodeType": "YulIdentifier",
														"src": "200:3:1"
													},
													"nodeType": "YulFunctionCall",
													"src": "200:17:1"
												},
												"variableNames": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "190:6:1"
													}
												]
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "outOfPlaceEncoding",
												"nodeType": "YulIdentifier",
												"src": "156:18:1"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "149:6:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "149:26:1"
									},
									"nodeType": "YulIf",
									"src": "146:81:1"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "279:42:1",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x22",
														"nodeType": "YulIdentifier",
														"src": "293:16:1"
													},
													"nodeType": "YulFunctionCall",
													"src": "293:18:1"
												},
												"nodeType": "YulExpressionStatement",
												"src": "293:18:1"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "outOfPlaceEncoding",
												"nodeType": "YulIdentifier",
												"src": "243:18:1"
											},
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "266:6:1"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "274:2:1",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "263:2:1"
												},
												"nodeType": "YulFunctionCall",
												"src": "263:14:1"
											}
										],
										"functionName": {
											"name": "eq",
											"nodeType": "YulIdentifier",
											"src": "240:2:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "240:38:1"
									},
									"nodeType": "YulIf",
									"src": "237:84:1"
								}
							]
						},
						"name": "extract_byte_array_length",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "data",
								"nodeType": "YulTypedName",
								"src": "42:4:1",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "51:6:1",
								"type": ""
							}
						],
						"src": "7:320:1"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "361:152:1",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "378:1:1",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "381:77:1",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "371:6:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "371:88:1"
									},
									"nodeType": "YulExpressionStatement",
									"src": "371:88:1"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "475:1:1",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "478:4:1",
												"type": "",
												"value": "0x22"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "468:6:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "468:15:1"
									},
									"nodeType": "YulExpressionStatement",
									"src": "468:15:1"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "499:1:1",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "502:4:1",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "492:6:1"
										},
										"nodeType": "YulFunctionCall",
										"src": "492:15:1"
									},
									"nodeType": "YulExpressionStatement",
									"src": "492:15:1"
								}
							]
						},
						"name": "panic_error_0x22",
						"nodeType": "YulFunctionDefinition",
						"src": "333:180:1"
					}
				]
			},
			"contents": "{\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n}\n",
			"id": 1,
			"language": "Yul",
			"name": "#utility.yul"
		}
	],
	"linkReferences": {},
	"object": "608060405234801561001057600080fd5b506040518060400160405280600b81526020017f48656c6c6f20776f726c640000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b50610166565b82805461006e90610105565b90600052602060002090601f01602090048101928261009057600085556100d7565b82601f106100a957805160ff19168380011785556100d7565b828001600101855582156100d7579182015b828111156100d65782518255916020019190600101906100bb565b5b5090506100e491906100e8565b5090565b5b808211156101015760008160009055506001016100e9565b5090565b6000600282049050600182168061011d57607f821691505b6020821081141561013157610130610137565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61029e806101756000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806355b768101461003b578063db16aab914610059575b600080fd5b610043610077565b6040516100509190610185565b60405180910390f35b610061610109565b60405161006e9190610185565b60405180910390f35b606060008054610086906101f6565b80601f01602080910402602001604051908101604052809291908181526020018280546100b2906101f6565b80156100ff5780601f106100d4576101008083540402835291602001916100ff565b820191906000526020600020905b8154815290600101906020018083116100e257829003601f168201915b5050505050905090565b606060006040518060400160405280600c81526020017f4865792c205468616e6b7321000000000000000000000000000000000000000081525090508091505090565b6000610157826101a7565b61016181856101b2565b93506101718185602086016101c3565b61017a81610257565b840191505092915050565b6000602082019050818103600083015261019f818461014c565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101e15780820151818401526020810190506101c6565b838111156101f0576000848401525b50505050565b6000600282049050600182168061020e57607f821691505b6020821081141561022257610221610228565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220076be94311ad7016b586758b8e6beb293039b8e1e5760d08a9917e3f4fc69a2d64736f6c63430008070033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0xB DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x48656C6C6F20776F726C64000000000000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x5C SWAP3 SWAP2 SWAP1 PUSH2 0x62 JUMP JUMPDEST POP PUSH2 0x166 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH2 0x6E SWAP1 PUSH2 0x105 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH2 0x90 JUMPI PUSH1 0x0 DUP6 SSTORE PUSH2 0xD7 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH2 0xA9 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xD7 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xD7 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xD6 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xBB JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0xE4 SWAP2 SWAP1 PUSH2 0xE8 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x101 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xE9 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x11D JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x131 JUMPI PUSH2 0x130 PUSH2 0x137 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x29E DUP1 PUSH2 0x175 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x36 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x55B76810 EQ PUSH2 0x3B JUMPI DUP1 PUSH4 0xDB16AAB9 EQ PUSH2 0x59 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x43 PUSH2 0x77 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x50 SWAP2 SWAP1 PUSH2 0x185 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x61 PUSH2 0x109 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x6E SWAP2 SWAP1 PUSH2 0x185 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH2 0x86 SWAP1 PUSH2 0x1F6 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0xB2 SWAP1 PUSH2 0x1F6 JUMP JUMPDEST DUP1 ISZERO PUSH2 0xFF JUMPI DUP1 PUSH1 0x1F LT PUSH2 0xD4 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0xFF JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xE2 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0xC DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x4865792C205468616E6B73210000000000000000000000000000000000000000 DUP2 MSTORE POP SWAP1 POP DUP1 SWAP2 POP POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x157 DUP3 PUSH2 0x1A7 JUMP JUMPDEST PUSH2 0x161 DUP2 DUP6 PUSH2 0x1B2 JUMP JUMPDEST SWAP4 POP PUSH2 0x171 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x1C3 JUMP JUMPDEST PUSH2 0x17A DUP2 PUSH2 0x257 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x19F DUP2 DUP5 PUSH2 0x14C JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1E1 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x1C6 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x1F0 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x20E JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x222 JUMPI PUSH2 0x221 PUSH2 0x228 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SMOD PUSH12 0xE94311AD7016B586758B8E6B 0xEB 0x29 ADDRESS CODECOPY 0xB8 0xE1 0xE5 PUSH23 0xD08A9917E3F4FC69A2D64736F6C634300080700330000 ",
	"sourceMap": "59:348:0:-:0;;;112:58;;;;;;;;;;138:24;;;;;;;;;;;;;;;;;:8;:24;;;;;;;;;;;;:::i;:::-;;59:348;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:320:1:-;51:6;88:1;82:4;78:12;68:22;;135:1;129:4;125:12;156:18;146:81;;212:4;204:6;200:17;190:27;;146:81;274:2;266:6;263:14;243:18;240:38;237:84;;;293:18;;:::i;:::-;237:84;58:269;7:320;;;:::o;333:180::-;381:77;378:1;371:88;478:4;475:1;468:15;502:4;499:1;492:15;59:348:0;;;;;;;"
}