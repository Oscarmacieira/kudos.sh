import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

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
  31337: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
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
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const readBaseActions = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readBaseActionsIsTest = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"METADATA"`
 */
export const readBaseActionsMetadata = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"curie"`
 */
export const readBaseActionsCurie = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"einstein"`
 */
export const readBaseActionsEinstein = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readBaseActionsExcludeArtifacts = /*#__PURE__*/ createReadContract(
  { abi: baseActionsAbi, functionName: 'excludeArtifacts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readBaseActionsExcludeContracts = /*#__PURE__*/ createReadContract(
  { abi: baseActionsAbi, functionName: 'excludeContracts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const readBaseActionsExcludeSelectors = /*#__PURE__*/ createReadContract(
  { abi: baseActionsAbi, functionName: 'excludeSelectors' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readBaseActionsExcludeSenders = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"failed"`
 */
export const readBaseActionsFailed = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"kudos"`
 */
export const readBaseActionsKudos = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"newton"`
 */
export const readBaseActionsNewton = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readBaseActionsTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: baseActionsAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readBaseActionsTargetArtifacts = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readBaseActionsTargetContracts = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readBaseActionsTargetInterfaces = /*#__PURE__*/ createReadContract(
  { abi: baseActionsAbi, functionName: 'targetInterfaces' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readBaseActionsTargetSelectors = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readBaseActionsTargetSenders = /*#__PURE__*/ createReadContract({
  abi: baseActionsAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const writeBaseActions = /*#__PURE__*/ createWriteContract({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"setUp"`
 */
export const writeBaseActionsSetUp = /*#__PURE__*/ createWriteContract({
  abi: baseActionsAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const simulateBaseActions = /*#__PURE__*/ createSimulateContract({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link baseActionsAbi}__ and `functionName` set to `"setUp"`
 */
export const simulateBaseActionsSetUp = /*#__PURE__*/ createSimulateContract({
  abi: baseActionsAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__
 */
export const watchBaseActionsEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: baseActionsAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log"`
 */
export const watchBaseActionsLogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: baseActionsAbi,
  eventName: 'log',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_address"`
 */
export const watchBaseActionsLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_array"`
 */
export const watchBaseActionsLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchBaseActionsLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchBaseActionsLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_int"`
 */
export const watchBaseActionsLogIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchBaseActionsLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchBaseActionsLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchBaseActionsLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchBaseActionsLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchBaseActionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchBaseActionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchBaseActionsLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchBaseActionsLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchBaseActionsLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_string"`
 */
export const watchBaseActionsLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchBaseActionsLogUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: baseActionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link baseActionsAbi}__ and `eventName` set to `"logs"`
 */
export const watchBaseActionsLogsEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: baseActionsAbi, eventName: 'logs' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__
 */
export const readConfigHelper = /*#__PURE__*/ createReadContract({
  abi: configHelperAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readConfigHelperIsTest = /*#__PURE__*/ createReadContract({
  abi: configHelperAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readConfigHelperExcludeArtifacts =
  /*#__PURE__*/ createReadContract({
    abi: configHelperAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readConfigHelperExcludeContracts =
  /*#__PURE__*/ createReadContract({
    abi: configHelperAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const readConfigHelperExcludeSelectors =
  /*#__PURE__*/ createReadContract({
    abi: configHelperAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readConfigHelperExcludeSenders = /*#__PURE__*/ createReadContract({
  abi: configHelperAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"failed"`
 */
export const readConfigHelperFailed = /*#__PURE__*/ createReadContract({
  abi: configHelperAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readConfigHelperTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: configHelperAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readConfigHelperTargetArtifacts = /*#__PURE__*/ createReadContract(
  { abi: configHelperAbi, functionName: 'targetArtifacts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readConfigHelperTargetContracts = /*#__PURE__*/ createReadContract(
  { abi: configHelperAbi, functionName: 'targetContracts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readConfigHelperTargetInterfaces =
  /*#__PURE__*/ createReadContract({
    abi: configHelperAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readConfigHelperTargetSelectors = /*#__PURE__*/ createReadContract(
  { abi: configHelperAbi, functionName: 'targetSelectors' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link configHelperAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readConfigHelperTargetSenders = /*#__PURE__*/ createReadContract({
  abi: configHelperAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__
 */
export const watchConfigHelperEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: configHelperAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log"`
 */
export const watchConfigHelperLogEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: configHelperAbi, eventName: 'log' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_address"`
 */
export const watchConfigHelperLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_array"`
 */
export const watchConfigHelperLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchConfigHelperLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchConfigHelperLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_int"`
 */
export const watchConfigHelperLogIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchConfigHelperLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchConfigHelperLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchConfigHelperLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchConfigHelperLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchConfigHelperLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchConfigHelperLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchConfigHelperLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchConfigHelperLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchConfigHelperLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_string"`
 */
export const watchConfigHelperLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchConfigHelperLogUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link configHelperAbi}__ and `eventName` set to `"logs"`
 */
export const watchConfigHelperLogsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: configHelperAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iKudosAbi}__
 */
export const readIKudos = /*#__PURE__*/ createReadContract({ abi: iKudosAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"getReference"`
 */
export const readIKudosGetReference = /*#__PURE__*/ createReadContract({
  abi: iKudosAbi,
  functionName: 'getReference',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"getReferenceCount"`
 */
export const readIKudosGetReferenceCount = /*#__PURE__*/ createReadContract({
  abi: iKudosAbi,
  functionName: 'getReferenceCount',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iKudosAbi}__
 */
export const writeIKudos = /*#__PURE__*/ createWriteContract({ abi: iKudosAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"addReference"`
 */
export const writeIKudosAddReference = /*#__PURE__*/ createWriteContract({
  abi: iKudosAbi,
  functionName: 'addReference',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"hideReference"`
 */
export const writeIKudosHideReference = /*#__PURE__*/ createWriteContract({
  abi: iKudosAbi,
  functionName: 'hideReference',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"showReference"`
 */
export const writeIKudosShowReference = /*#__PURE__*/ createWriteContract({
  abi: iKudosAbi,
  functionName: 'showReference',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iKudosAbi}__
 */
export const simulateIKudos = /*#__PURE__*/ createSimulateContract({
  abi: iKudosAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"addReference"`
 */
export const simulateIKudosAddReference = /*#__PURE__*/ createSimulateContract({
  abi: iKudosAbi,
  functionName: 'addReference',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"hideReference"`
 */
export const simulateIKudosHideReference = /*#__PURE__*/ createSimulateContract(
  { abi: iKudosAbi, functionName: 'hideReference' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iKudosAbi}__ and `functionName` set to `"showReference"`
 */
export const simulateIKudosShowReference = /*#__PURE__*/ createSimulateContract(
  { abi: iKudosAbi, functionName: 'showReference' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iKudosAbi}__
 */
export const watchIKudosEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iKudosAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iKudosAbi}__ and `eventName` set to `"ReferenceAdded"`
 */
export const watchIKudosReferenceAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iKudosAbi,
    eventName: 'ReferenceAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iKudosAbi}__ and `eventName` set to `"ReferenceHidden"`
 */
export const watchIKudosReferenceHiddenEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iKudosAbi,
    eventName: 'ReferenceHidden',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iKudosAbi}__ and `eventName` set to `"ReferenceShown"`
 */
export const watchIKudosReferenceShownEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iKudosAbi,
    eventName: 'ReferenceShown',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const readIMulticall3 = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const readIMulticall3GetBasefee = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBasefee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const readIMulticall3GetBlockHash = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBlockHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const readIMulticall3GetBlockNumber = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const readIMulticall3GetChainId = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getChainId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const readIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const readIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const readIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const readIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const readIMulticall3GetEthBalance = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getEthBalance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const readIMulticall3GetLastBlockHash = /*#__PURE__*/ createReadContract(
  { abi: iMulticall3Abi, functionName: 'getLastBlockHash' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const writeIMulticall3 = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const writeIMulticall3Aggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const writeIMulticall3Aggregate3 = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate3',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const writeIMulticall3Aggregate3Value =
  /*#__PURE__*/ createWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const writeIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const writeIMulticall3TryAggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'tryAggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const writeIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const simulateIMulticall3 = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const simulateIMulticall3Aggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const simulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const simulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const simulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const simulateIMulticall3TryAggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const simulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const readKudos = /*#__PURE__*/ createReadContract({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"getReference"`
 *
 *
 */
export const readKudosGetReference = /*#__PURE__*/ createReadContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'getReference',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"getReferenceCount"`
 *
 *
 */
export const readKudosGetReferenceCount = /*#__PURE__*/ createReadContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'getReferenceCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"owner"`
 *
 *
 */
export const readKudosOwner = /*#__PURE__*/ createReadContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const writeKudos = /*#__PURE__*/ createWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"addReference"`
 *
 *
 */
export const writeKudosAddReference = /*#__PURE__*/ createWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'addReference',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"hideReference"`
 *
 *
 */
export const writeKudosHideReference = /*#__PURE__*/ createWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'hideReference',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const writeKudosRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"showReference"`
 *
 *
 */
export const writeKudosShowReference = /*#__PURE__*/ createWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'showReference',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const writeKudosTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const simulateKudos = /*#__PURE__*/ createSimulateContract({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"addReference"`
 *
 *
 */
export const simulateKudosAddReference = /*#__PURE__*/ createSimulateContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'addReference',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"hideReference"`
 *
 *
 */
export const simulateKudosHideReference = /*#__PURE__*/ createSimulateContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'hideReference',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const simulateKudosRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"showReference"`
 *
 *
 */
export const simulateKudosShowReference = /*#__PURE__*/ createSimulateContract({
  abi: kudosAbi,
  address: kudosAddress,
  functionName: 'showReference',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const simulateKudosTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: kudosAbi,
    address: kudosAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosAbi}__
 *
 *
 */
export const watchKudosEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: kudosAbi,
  address: kudosAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 *
 */
export const watchKudosOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"ReferenceAdded"`
 *
 *
 */
export const watchKudosReferenceAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'ReferenceAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"ReferenceHidden"`
 *
 *
 */
export const watchKudosReferenceHiddenEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'ReferenceHidden',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosAbi}__ and `eventName` set to `"ReferenceShown"`
 *
 *
 */
export const watchKudosReferenceShownEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosAbi,
    address: kudosAddress,
    eventName: 'ReferenceShown',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__
 */
export const readKudosHelper = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readKudosHelperIsTest = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"addressRegistry"`
 */
export const readKudosHelperAddressRegistry = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'addressRegistry',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readKudosHelperExcludeArtifacts = /*#__PURE__*/ createReadContract(
  { abi: kudosHelperAbi, functionName: 'excludeArtifacts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readKudosHelperExcludeContracts = /*#__PURE__*/ createReadContract(
  { abi: kudosHelperAbi, functionName: 'excludeContracts' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const readKudosHelperExcludeSelectors = /*#__PURE__*/ createReadContract(
  { abi: kudosHelperAbi, functionName: 'excludeSelectors' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readKudosHelperExcludeSenders = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"failed"`
 */
export const readKudosHelperFailed = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"kudos"`
 */
export const readKudosHelperKudos = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"protocolConfig"`
 */
export const readKudosHelperProtocolConfig = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'protocolConfig',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readKudosHelperTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: kudosHelperAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readKudosHelperTargetArtifacts = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readKudosHelperTargetContracts = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readKudosHelperTargetInterfaces = /*#__PURE__*/ createReadContract(
  { abi: kudosHelperAbi, functionName: 'targetInterfaces' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readKudosHelperTargetSelectors = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosHelperAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readKudosHelperTargetSenders = /*#__PURE__*/ createReadContract({
  abi: kudosHelperAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__
 */
export const watchKudosHelperEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: kudosHelperAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log"`
 */
export const watchKudosHelperLogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: kudosHelperAbi,
  eventName: 'log',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_address"`
 */
export const watchKudosHelperLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_array"`
 */
export const watchKudosHelperLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchKudosHelperLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchKudosHelperLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_int"`
 */
export const watchKudosHelperLogIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchKudosHelperLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchKudosHelperLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchKudosHelperLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchKudosHelperLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchKudosHelperLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchKudosHelperLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchKudosHelperLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchKudosHelperLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchKudosHelperLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_string"`
 */
export const watchKudosHelperLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchKudosHelperLogUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosHelperAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosHelperAbi}__ and `eventName` set to `"logs"`
 */
export const watchKudosHelperLogsEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: kudosHelperAbi, eventName: 'logs' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const readKudosZeroState = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readKudosZeroStateIsTest = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"METADATA"`
 */
export const readKudosZeroStateMetadata = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"curie"`
 */
export const readKudosZeroStateCurie = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"einstein"`
 */
export const readKudosZeroStateEinstein = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readKudosZeroStateExcludeArtifacts =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readKudosZeroStateExcludeContracts =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const readKudosZeroStateExcludeSelectors =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readKudosZeroStateExcludeSenders =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"failed"`
 */
export const readKudosZeroStateFailed = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"kudos"`
 */
export const readKudosZeroStateKudos = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"newton"`
 */
export const readKudosZeroStateNewton = /*#__PURE__*/ createReadContract({
  abi: kudosZeroStateAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readKudosZeroStateTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readKudosZeroStateTargetArtifacts =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readKudosZeroStateTargetContracts =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readKudosZeroStateTargetInterfaces =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readKudosZeroStateTargetSelectors =
  /*#__PURE__*/ createReadContract({
    abi: kudosZeroStateAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readKudosZeroStateTargetSenders = /*#__PURE__*/ createReadContract(
  { abi: kudosZeroStateAbi, functionName: 'targetSenders' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const writeKudosZeroState = /*#__PURE__*/ createWriteContract({
  abi: kudosZeroStateAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"setUp"`
 */
export const writeKudosZeroStateSetUp = /*#__PURE__*/ createWriteContract({
  abi: kudosZeroStateAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const simulateKudosZeroState = /*#__PURE__*/ createSimulateContract({
  abi: kudosZeroStateAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `functionName` set to `"setUp"`
 */
export const simulateKudosZeroStateSetUp = /*#__PURE__*/ createSimulateContract(
  { abi: kudosZeroStateAbi, functionName: 'setUp' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__
 */
export const watchKudosZeroStateEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: kudosZeroStateAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log"`
 */
export const watchKudosZeroStateLogEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_address"`
 */
export const watchKudosZeroStateLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_array"`
 */
export const watchKudosZeroStateLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchKudosZeroStateLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchKudosZeroStateLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_int"`
 */
export const watchKudosZeroStateLogIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchKudosZeroStateLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchKudosZeroStateLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchKudosZeroStateLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchKudosZeroStateLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchKudosZeroStateLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchKudosZeroStateLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchKudosZeroStateLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchKudosZeroStateLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchKudosZeroStateLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_string"`
 */
export const watchKudosZeroStateLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchKudosZeroStateLogUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link kudosZeroStateAbi}__ and `eventName` set to `"logs"`
 */
export const watchKudosZeroStateLogsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: kudosZeroStateAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storageHelperAbi}__
 */
export const readStorageHelper = /*#__PURE__*/ createReadContract({
  abi: storageHelperAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storageHelperAbi}__ and `functionName` set to `"addressRegistry"`
 */
export const readStorageHelperAddressRegistry =
  /*#__PURE__*/ createReadContract({
    abi: storageHelperAbi,
    functionName: 'addressRegistry',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storageHelperAbi}__ and `functionName` set to `"kudos"`
 */
export const readStorageHelperKudos = /*#__PURE__*/ createReadContract({
  abi: storageHelperAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link storageHelperAbi}__ and `functionName` set to `"protocolConfig"`
 */
export const readStorageHelperProtocolConfig = /*#__PURE__*/ createReadContract(
  { abi: storageHelperAbi, functionName: 'protocolConfig' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__
 */
export const readTestData = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readTestDataIsTest = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"METADATA"`
 */
export const readTestDataMetadata = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"curie"`
 */
export const readTestDataCurie = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"einstein"`
 */
export const readTestDataEinstein = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readTestDataExcludeArtifacts = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'excludeArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readTestDataExcludeContracts = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'excludeContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const readTestDataExcludeSelectors = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'excludeSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readTestDataExcludeSenders = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"failed"`
 */
export const readTestDataFailed = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"kudos"`
 */
export const readTestDataKudos = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"newton"`
 */
export const readTestDataNewton = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readTestDataTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: testDataAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readTestDataTargetArtifacts = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readTestDataTargetContracts = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readTestDataTargetInterfaces = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'targetInterfaces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readTestDataTargetSelectors = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testDataAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readTestDataTargetSenders = /*#__PURE__*/ createReadContract({
  abi: testDataAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__
 */
export const watchTestDataEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testDataAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log"`
 */
export const watchTestDataLogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testDataAbi,
  eventName: 'log',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_address"`
 */
export const watchTestDataLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_array"`
 */
export const watchTestDataLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchTestDataLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchTestDataLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_int"`
 */
export const watchTestDataLogIntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testDataAbi,
  eventName: 'log_int',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchTestDataLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchTestDataLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchTestDataLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchTestDataLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchTestDataLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchTestDataLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchTestDataLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchTestDataLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchTestDataLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_string"`
 */
export const watchTestDataLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testDataAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchTestDataLogUintEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: testDataAbi, eventName: 'log_uint' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testDataAbi}__ and `eventName` set to `"logs"`
 */
export const watchTestDataLogsEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testDataAbi,
  eventName: 'logs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__
 */
export const readTestHelper = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readTestHelperIsTest = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"METADATA"`
 */
export const readTestHelperMetadata = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'METADATA',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"curie"`
 */
export const readTestHelperCurie = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'curie',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"einstein"`
 */
export const readTestHelperEinstein = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'einstein',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readTestHelperExcludeArtifacts = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'excludeArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readTestHelperExcludeContracts = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'excludeContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const readTestHelperExcludeSelectors = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'excludeSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readTestHelperExcludeSenders = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"failed"`
 */
export const readTestHelperFailed = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"kudos"`
 */
export const readTestHelperKudos = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'kudos',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"newton"`
 */
export const readTestHelperNewton = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'newton',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readTestHelperTargetArtifactSelectors =
  /*#__PURE__*/ createReadContract({
    abi: testHelperAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readTestHelperTargetArtifacts = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readTestHelperTargetContracts = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readTestHelperTargetInterfaces = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'targetInterfaces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readTestHelperTargetSelectors = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testHelperAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readTestHelperTargetSenders = /*#__PURE__*/ createReadContract({
  abi: testHelperAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__
 */
export const watchTestHelperEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testHelperAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log"`
 */
export const watchTestHelperLogEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testHelperAbi,
  eventName: 'log',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_address"`
 */
export const watchTestHelperLogAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_array"`
 */
export const watchTestHelperLogArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchTestHelperLogBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchTestHelperLogBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_int"`
 */
export const watchTestHelperLogIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchTestHelperLogNamedAddressEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchTestHelperLogNamedArrayEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchTestHelperLogNamedBytesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchTestHelperLogNamedBytes32Event =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchTestHelperLogNamedDecimalIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchTestHelperLogNamedDecimalUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchTestHelperLogNamedIntEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchTestHelperLogNamedStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchTestHelperLogNamedUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_string"`
 */
export const watchTestHelperLogStringEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchTestHelperLogUintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: testHelperAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testHelperAbi}__ and `eventName` set to `"logs"`
 */
export const watchTestHelperLogsEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testHelperAbi,
  eventName: 'logs',
})
