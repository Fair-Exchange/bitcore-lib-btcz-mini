'use strict';

var bitcore = module.exports;

// module information
bitcore.version = 'v' + require('./package.json').version;
bitcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bitcore-lib-btcz-mini found. ' +
      'Please make sure to require bitcore-lib-btcz-mini and check that submodules do' +
      ' not also include their own bitcore-lib-btcz-mini dependency.';
    throw new Error(message);
  }
};
bitcore.versionGuard(global._bitcoreBtcz);
global._bitcoreBtcz = bitcore.version;

// crypto                          	
bitcore.crypto = {};
// bitcore.crypto.BN = require('./lib/crypto/bn');
bitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
bitcore.crypto.Hash = require('bitcore-lib').crypto.Hash;
// bitcore.crypto.Random = require('bitcore-lib').crypto.Random;
// bitcore.crypto.Point = require('bitcore-lib').crypto.Point ;
bitcore.crypto.Signature = require('bitcore-lib').crypto.Signature;

// encoding
 bitcore.encoding = {};
bitcore.encoding.Base58 = require('bitcore-lib').encoding.Base58;
bitcore.encoding.Base58Check = require('bitcore-lib').encoding.Base58Check;
bitcore.encoding.BufferReader = require('bitcore-lib').encoding.BufferReader;
bitcore.encoding.BufferWriter = require('bitcore-lib').encoding.BufferWriter;
// bitcore.encoding.Varint = require('bitcore-lib').encoding.Varint;

// utilities
// bitcore.util = {};
// bitcore.util.buffer = require('bitcore-lib').buffer;
// bitcore.util.js = require('bitcore-lib').util.js;
// bitcore.util.preconditions = require('bitcore-lib').util.preconditions;
// bitcore.util.base32 = require('bitcore-lib').util.base32;
// bitcore.util.convertBits = require('bitcore-lib').util.convertBits;

// errors thrown by the library
// bitcore.errors = require('./lib/errors');

// main bitcoin library
bitcore.Address = require('./lib/address');
// bitcore.Block = require('./lib/block');
// bitcore.MerkleBlock = require('./lib/block/merkleblock');
// bitcore.BlockHeader = require('./lib/block/blockheader');
bitcore.HDPrivateKey = require('./lib/hdprivatekey.js');
bitcore.HDPublicKey = require('./lib/hdpublickey.js');
bitcore.Networks = require('./lib/networks');
bitcore.Opcode = require('./lib/opcode');
bitcore.PrivateKey = require('./lib/privatekey');
bitcore.PublicKey = require('./lib/publickey');
bitcore.Script = require('./lib/script');
bitcore.Transaction = require('./lib/transaction');
bitcore.URI = require('./lib/uri');
bitcore.Unit = require('./lib/unit');

// dependencies, subject to change
bitcore.deps = {};
bitcore.deps.bnjs = require('bn.js');
bitcore.deps.bs58 = require('bs58');
bitcore.deps.Buffer = Buffer;
bitcore.deps.elliptic = require('elliptic');
bitcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
//bitcore.Transaction.sighash = require('./lib/transaction/sighash');
module.exports = bitcore;
