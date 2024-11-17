import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseActions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseActionsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'METADATA',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'curie',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'einstein',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kudos',
    outputs: [{ name: '', internalType: 'contract Kudos', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'newton',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConfigHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const configHelperAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IKudos
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iKudosAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'metadata', internalType: 'string', type: 'string' },
    ],
    name: 'addReference',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReference',
    outputs: [
      {
        name: '',
        internalType: 'struct DataTypes.Reference',
        type: 'tuple',
        components: [
          { name: 'author', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          {
            name: 'status',
            internalType: 'enum DataTypes.ReferenceStatus',
            type: 'uint8',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'getReferenceCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hideReference',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'showReference',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'author',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferenceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferenceHidden',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferenceShown',
  },
  { type: 'error', inputs: [], name: 'OnlyRecipientAllowed' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Kudos
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const kudosAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'metadata', internalType: 'string', type: 'string' },
    ],
    name: 'addReference',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getReference',
    outputs: [
      {
        name: '',
        internalType: 'struct DataTypes.Reference',
        type: 'tuple',
        components: [
          { name: 'author', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          {
            name: 'status',
            internalType: 'enum DataTypes.ReferenceStatus',
            type: 'uint8',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'getReferenceCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hideReference',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'showReference',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'author',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferenceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferenceHidden',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferenceShown',
  },
  { type: 'error', inputs: [], name: 'OnlyRecipientAllowed' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

/**
 *
 */
export const kudosAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 *
 */
export const kudosConfig = { address: kudosAddress, abi: kudosAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KudosHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const kudosHelperAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'addressRegistry',
    outputs: [{ name: 'kudos', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kudos',
    outputs: [{ name: '', internalType: 'contract Kudos', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolConfig',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// KudosZeroState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const kudosZeroStateAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'METADATA',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'curie',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'einstein',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kudos',
    outputs: [{ name: '', internalType: 'contract Kudos', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'newton',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StorageHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const storageHelperAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'addressRegistry',
    outputs: [{ name: 'kudos', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kudos',
    outputs: [{ name: '', internalType: 'contract Kudos', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolConfig',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  { type: 'error', inputs: [], name: 'StringsInvalidAddressFormat' },
  { type: 'error', inputs: [], name: 'StringsInvalidChar' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestData
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testDataAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'METADATA',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'curie',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'einstein',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kudos',
    outputs: [{ name: '', internalType: 'contract Kudos', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'newton',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testHelperAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'METADATA',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'curie',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'einstein',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kudos',
    outputs: [{ name: '', internalType: 'contract Kudos', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'newton',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const useReadBaseActions = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadBaseActionsIsTest = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"METADATA"`
 */
export const useReadBaseActionsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"curie"`
 */
export const useReadBaseActionsCurie = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"einstein"`
 */
export const useReadBaseActionsEinstein = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadBaseActionsExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadBaseActionsExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadBaseActionsExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadBaseActionsExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"failed"`
 */
export const useReadBaseActionsFailed = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"kudos"`
 */
export const useReadBaseActionsKudos = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"newton"`
 */
export const useReadBaseActionsNewton = /*#__PURE__*/ createUseReadContract({
  abi: baseActionsAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadBaseActionsTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadBaseActionsTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadBaseActionsTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadBaseActionsTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadBaseActionsTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadBaseActionsTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: baseActionsAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const useWriteBaseActions = /*#__PURE__*/ createUseWriteContract({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteBaseActionsSetUp = /*#__PURE__*/ createUseWriteContract({
  abi: baseActionsAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const useSimulateBaseActions = /*#__PURE__*/ createUseSimulateContract({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateBaseActionsSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseActionsAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const useWatchBaseActionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: baseActionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log"`
 */
export const useWatchBaseActionsLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchBaseActionsLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchBaseActionsLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchBaseActionsLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchBaseActionsLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchBaseActionsLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchBaseActionsLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchBaseActionsLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchBaseActionsLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchBaseActionsLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchBaseActionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchBaseActionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchBaseActionsLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchBaseActionsLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchBaseActionsLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchBaseActionsLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchBaseActionsLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchBaseActionsLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__
 */
export const useReadConfigHelper = /*#__PURE__*/ createUseReadContract({
  abi: configHelperAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadConfigHelperIsTest = /*#__PURE__*/ createUseReadContract({
  abi: configHelperAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadConfigHelperExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadConfigHelperExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadConfigHelperExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadConfigHelperExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"failed"`
 */
export const useReadConfigHelperFailed = /*#__PURE__*/ createUseReadContract({
  abi: configHelperAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadConfigHelperTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadConfigHelperTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadConfigHelperTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadConfigHelperTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadConfigHelperTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadConfigHelperTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: configHelperAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__
 */
export const useWatchConfigHelperEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: configHelperAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log"`
 */
export const useWatchConfigHelperLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchConfigHelperLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchConfigHelperLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchConfigHelperLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchConfigHelperLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchConfigHelperLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchConfigHelperLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchConfigHelperLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchConfigHelperLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchConfigHelperLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchConfigHelperLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchConfigHelperLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchConfigHelperLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchConfigHelperLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchConfigHelperLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchConfigHelperLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchConfigHelperLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchConfigHelperLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iKudosAbi}__
 */
export const useReadIKudos = /*#__PURE__*/ createUseReadContract({
  abi: iKudosAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"getReference"`
 */
export const useReadIKudosGetReference = /*#__PURE__*/ createUseReadContract({
  abi: iKudosAbi,
  functionName: 'getReference',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"getReferenceCount"`
 */
export const useReadIKudosGetReferenceCount =
  /*#__PURE__*/ createUseReadContract({
    abi: iKudosAbi,
    functionName: 'getReferenceCount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iKudosAbi}__
 */
export const useWriteIKudos = /*#__PURE__*/ createUseWriteContract({
  abi: iKudosAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"addReference"`
 */
export const useWriteIKudosAddReference = /*#__PURE__*/ createUseWriteContract({
  abi: iKudosAbi,
  functionName: 'addReference',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"hideReference"`
 */
export const useWriteIKudosHideReference = /*#__PURE__*/ createUseWriteContract(
  { abi: iKudosAbi, functionName: 'hideReference' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"showReference"`
 */
export const useWriteIKudosShowReference = /*#__PURE__*/ createUseWriteContract(
  { abi: iKudosAbi, functionName: 'showReference' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iKudosAbi}__
 */
export const useSimulateIKudos = /*#__PURE__*/ createUseSimulateContract({
  abi: iKudosAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"addReference"`
 */
export const useSimulateIKudosAddReference =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iKudosAbi,
    functionName: 'addReference',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"hideReference"`
 */
export const useSimulateIKudosHideReference =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iKudosAbi,
    functionName: 'hideReference',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"showReference"`
 */
export const useSimulateIKudosShowReference =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iKudosAbi,
    functionName: 'showReference',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iKudosAbi}__
 */
export const useWatchIKudosEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iKudosAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iKudosAbi}__ and `eventName` set to `"ReferenceAdded"`
 */
export const useWatchIKudosReferenceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iKudosAbi,
    eventName: 'ReferenceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iKudosAbi}__ and `eventName` set to `"ReferenceHidden"`
 */
export const useWatchIKudosReferenceHiddenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iKudosAbi,
    eventName: 'ReferenceHidden',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iKudosAbi}__ and `eventName` set to `"ReferenceShown"`
 */
export const useWatchIKudosReferenceShownEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iKudosAbi,
    eventName: 'ReferenceShown',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const useReadKudos = /*#__PURE__*/ createUseReadContract({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"getReference"`
 *
 *
 */
export const useReadKudosGetReference = /*#__PURE__*/ createUseReadContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'getReference',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"getReferenceCount"`
 *
 *
 */
export const useReadKudosGetReferenceCount =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'getReferenceCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"owner"`
 *
 *
 */
export const useReadKudosOwner = /*#__PURE__*/ createUseReadContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const useWriteKudos = /*#__PURE__*/ createUseWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"addReference"`
 *
 *
 */
export const useWriteKudosAddReference = /*#__PURE__*/ createUseWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'addReference',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"hideReference"`
 *
 *
 */
export const useWriteKudosHideReference = /*#__PURE__*/ createUseWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'hideReference',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const useWriteKudosRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"showReference"`
 *
 *
 */
export const useWriteKudosShowReference = /*#__PURE__*/ createUseWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'showReference',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const useWriteKudosTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const useSimulateKudos = /*#__PURE__*/ createUseSimulateContract({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"addReference"`
 *
 *
 */
export const useSimulateKudosAddReference =
  /*#__PURE__*/ createUseSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'addReference',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"hideReference"`
 *
 *
 */
export const useSimulateKudosHideReference =
  /*#__PURE__*/ createUseSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'hideReference',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const useSimulateKudosRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"showReference"`
 *
 *
 */
export const useSimulateKudosShowReference =
  /*#__PURE__*/ createUseSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'showReference',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const useSimulateKudosTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const useWatchKudosEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 *
 */
export const useWatchKudosOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"ReferenceAdded"`
 *
 *
 */
export const useWatchKudosReferenceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'ReferenceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"ReferenceHidden"`
 *
 *
 */
export const useWatchKudosReferenceHiddenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'ReferenceHidden',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"ReferenceShown"`
 *
 *
 */
export const useWatchKudosReferenceShownEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'ReferenceShown',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__
 */
export const useReadKudosHelper = /*#__PURE__*/ createUseReadContract({
  abi: kudosHelperAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadKudosHelperIsTest = /*#__PURE__*/ createUseReadContract({
  abi: kudosHelperAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"addressRegistry"`
 */
export const useReadKudosHelperAddressRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'addressRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadKudosHelperExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadKudosHelperExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadKudosHelperExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadKudosHelperExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"failed"`
 */
export const useReadKudosHelperFailed = /*#__PURE__*/ createUseReadContract({
  abi: kudosHelperAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"kudos"`
 */
export const useReadKudosHelperKudos = /*#__PURE__*/ createUseReadContract({
  abi: kudosHelperAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"protocolConfig"`
 */
export const useReadKudosHelperProtocolConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'protocolConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadKudosHelperTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadKudosHelperTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadKudosHelperTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadKudosHelperTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadKudosHelperTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadKudosHelperTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__
 */
export const useWatchKudosHelperEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: kudosHelperAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log"`
 */
export const useWatchKudosHelperLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchKudosHelperLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchKudosHelperLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchKudosHelperLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchKudosHelperLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchKudosHelperLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchKudosHelperLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchKudosHelperLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchKudosHelperLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchKudosHelperLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchKudosHelperLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchKudosHelperLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchKudosHelperLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchKudosHelperLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchKudosHelperLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchKudosHelperLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchKudosHelperLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchKudosHelperLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const useReadKudosZeroState = /*#__PURE__*/ createUseReadContract({
  abi: kudosZeroStateAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadKudosZeroStateIsTest = /*#__PURE__*/ createUseReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"METADATA"`
 */
export const useReadKudosZeroStateMetadata =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'METADATA',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"curie"`
 */
export const useReadKudosZeroStateCurie = /*#__PURE__*/ createUseReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"einstein"`
 */
export const useReadKudosZeroStateEinstein =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'einstein',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadKudosZeroStateExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadKudosZeroStateExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadKudosZeroStateExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadKudosZeroStateExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"failed"`
 */
export const useReadKudosZeroStateFailed = /*#__PURE__*/ createUseReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"kudos"`
 */
export const useReadKudosZeroStateKudos = /*#__PURE__*/ createUseReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"newton"`
 */
export const useReadKudosZeroStateNewton = /*#__PURE__*/ createUseReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadKudosZeroStateTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadKudosZeroStateTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadKudosZeroStateTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadKudosZeroStateTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadKudosZeroStateTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadKudosZeroStateTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const useWriteKudosZeroState = /*#__PURE__*/ createUseWriteContract({
  abi: kudosZeroStateAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteKudosZeroStateSetUp = /*#__PURE__*/ createUseWriteContract(
  { abi: kudosZeroStateAbi, functionName: 'setUp' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const useSimulateKudosZeroState =
  /*#__PURE__*/ createUseSimulateContract({ abi: kudosZeroStateAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateKudosZeroStateSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: kudosZeroStateAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const useWatchKudosZeroStateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: kudosZeroStateAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log"`
 */
export const useWatchKudosZeroStateLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchKudosZeroStateLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchKudosZeroStateLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchKudosZeroStateLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchKudosZeroStateLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchKudosZeroStateLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchKudosZeroStateLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchKudosZeroStateLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchKudosZeroStateLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchKudosZeroStateLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchKudosZeroStateLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchKudosZeroStateLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchKudosZeroStateLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchKudosZeroStateLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchKudosZeroStateLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchKudosZeroStateLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchKudosZeroStateLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchKudosZeroStateLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageHelperAbi}__
 */
export const useReadStorageHelper = /*#__PURE__*/ createUseReadContract({
  abi: storageHelperAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageHelperAbi}__ and `functionName` set to `"addressRegistry"`
 */
export const useReadStorageHelperAddressRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: storageHelperAbi,
    functionName: 'addressRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageHelperAbi}__ and `functionName` set to `"kudos"`
 */
export const useReadStorageHelperKudos = /*#__PURE__*/ createUseReadContract({
  abi: storageHelperAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageHelperAbi}__ and `functionName` set to `"protocolConfig"`
 */
export const useReadStorageHelperProtocolConfig =
  /*#__PURE__*/ createUseReadContract({
    abi: storageHelperAbi,
    functionName: 'protocolConfig',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__
 */
export const useReadTestData = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadTestDataIsTest = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"METADATA"`
 */
export const useReadTestDataMetadata = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"curie"`
 */
export const useReadTestDataCurie = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"einstein"`
 */
export const useReadTestDataEinstein = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadTestDataExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadTestDataExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadTestDataExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadTestDataExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"failed"`
 */
export const useReadTestDataFailed = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"kudos"`
 */
export const useReadTestDataKudos = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"newton"`
 */
export const useReadTestDataNewton = /*#__PURE__*/ createUseReadContract({
  abi: testDataAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadTestDataTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadTestDataTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadTestDataTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadTestDataTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadTestDataTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testDataAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadTestDataTargetSenders = /*#__PURE__*/ createUseReadContract(
  { abi: testDataAbi, functionName: 'targetSenders' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__
 */
export const useWatchTestDataEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testDataAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log"`
 */
export const useWatchTestDataLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchTestDataLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchTestDataLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchTestDataLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchTestDataLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchTestDataLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchTestDataLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchTestDataLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchTestDataLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchTestDataLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchTestDataLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchTestDataLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchTestDataLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchTestDataLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchTestDataLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchTestDataLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchTestDataLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchTestDataLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testDataAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__
 */
export const useReadTestHelper = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadTestHelperIsTest = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"METADATA"`
 */
export const useReadTestHelperMetadata = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"curie"`
 */
export const useReadTestHelperCurie = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"einstein"`
 */
export const useReadTestHelperEinstein = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadTestHelperExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadTestHelperExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadTestHelperExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadTestHelperExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"failed"`
 */
export const useReadTestHelperFailed = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"kudos"`
 */
export const useReadTestHelperKudos = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"newton"`
 */
export const useReadTestHelperNewton = /*#__PURE__*/ createUseReadContract({
  abi: testHelperAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadTestHelperTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadTestHelperTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadTestHelperTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadTestHelperTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadTestHelperTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadTestHelperTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: testHelperAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__
 */
export const useWatchTestHelperEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: testHelperAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log"`
 */
export const useWatchTestHelperLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchTestHelperLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchTestHelperLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchTestHelperLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchTestHelperLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchTestHelperLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchTestHelperLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchTestHelperLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchTestHelperLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchTestHelperLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchTestHelperLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchTestHelperLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchTestHelperLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchTestHelperLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchTestHelperLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchTestHelperLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchTestHelperLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchTestHelperLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'logs',
  })
