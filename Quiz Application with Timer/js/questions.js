// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which of the following is popularly used for storing bitcoins?",
    answer: "Wallet",
    options: [
      "Pocket",
      "Wallet",
      "Box",
      "Stack"
    ]
  },
  {
    numb: 2,
    question: "What does the block in the blockchain consist of?",
    answer: "All of these",
    options: [
      "Transaction data",
      "A Hash point",
      "A Timestamp",
      "All of these"
    ]
  },
  {
    numb: 3,
    question: "Why do Blockchains not have a single point of failure?",
    answer: "They have multiple nodes",
    options: [
      "They use hash functions",
      "They are installed on hardened operating systems",
      "They have multiple nodes",
      "They use merkle trees"
    ]
  },
  {
    numb: 4,
    question: "What represents the number of transactions per second that a blockchain consensus algorithm can process?",
    answer: "Throughput",
    options: [
      "Fault-tolerance threshold",
      "Latency",
      "Scalability",
      "Throughput"
    ]
  },
  {
    numb: 5,
    question: "What are some of the advantages of implementing enterprise blockchain?",
    answer: "All of the above",
    options: [
      "Reduce IT costs",
      "Expand business-to-business and business-to-consumer networks",
      "Enable new products",
      "All of the above"
    ]
  },
  {
    numb: 6,
    question: "What areas of cybersecurity does blockchain have the potential to improve?",
    answer: "Resilience",
    options: [
      "Building security",
      "Payment history",
      "Password complexity",
      "Resilience"
    ]
  },
  {
    numb: 7,
    question: "Blockchain can perform user transactions without involving any third-party intermediaries",
    answer: "Without involving any third party",
    options: [
      "With the help of the third party",
      "Without involving any third party",
      "Without involving any owned",
      "Without involving any authenticated"
    ]
  },
  {
    numb: 8,
    question: "Who introduced the digital online cryptocurrency known as Bitcoin?",
    answer: "Satoshi Nakamoto",
    options: [
      "Satoshi Nakamoto",
      "Nick Szabo",
      "Wei Dai",
      "Hal Finney"
    ]
  },
  {
    numb: 9,
    question: "What does UTXO stand for?",
    answer: "Unspent Transaction Output",
    options: [
      "Unspent Trade Offer",
      "Unspent Transaction xeroxed Output",
      "Unique Transaction Offer",
      "Unspent Transaction Output"
    ]
  },
  {
    numb: 10,
    question: "By default, the ledger system in Hyperledger Fabric uses this database.",
    answer: "LevelDB",
    options: [
      "MYSQL",
      "CouchDB",
      "MS SQL",
      "LevelDB"
    ]
  },
  {
    numb: 11,
    question: "Hash identifying each block in the blockchain is generated using which of the following cryptographic algorithm?",
    answer: "SHA256",
    options: [
      "SHA128",
      "SHA256",
      "Both of them",
      "None of them"
    ]
  },
  {
    numb: 12,
    question: "Which of these is another part of Hyperledger Fabric Ledger",
    answer: "Transaction Logs",
    options: [
      "Transaction Logs",
      "Snapshots",
      "Stateless data",
      "Membership logs"
    ]
  },
  {
    numb: 13,
    question: "Transactions per second (TPS) for Proof-of-Work Blockchain are approximate?",
    answer: "7-15 per second",
    options: [
      "24K per second",
      "175K per second",
      "Only limited to the number of nodes on the network",
      "7-15 per second"
    ]
  },
  {
    numb: 14,
    question: "Metamask is a non-custodial wallet because...",
    answer: "You control your private key",
    options: [
      "You control your private key",
      "A third-party controls your private key",
      "It's software wallet",
      "It generates multiple addresses"
    ]
  },
  {
    numb: 15,
    question: "The transaction Merkle Tree root value in a Bitcoin block is calculated using,",
    answer: "Hash of transactions",
    options: [
      "Hash of transactions",
      "Previous block's hash",
      "Number of transactions",
      "None of the above"
    ]
  },
  // Input Type questions
  {
    numb: 16,
    question: "A Blockchain is a type of?",
    correctAnswer: "database"
  },
  {
    numb: 17,
    question: "Blockchain has ____ versions.",
    correctAnswer: "3"
  },
  {
    numb: 18,
    question: "What powers the Ethereum Virtual Machine? ",
    correctAnswer: "gas"
  },
  {
    numb: 19,
    question: "If a hacker wanted to alter a blockchain, what percentage of the block copies would he have to alter?",
    correctAnswer: "51"
  },
  {
    numb: 20,
    question: "What biblical name is given to the first block in blockchain? ",
    correctAnswer: "genesis"
  },

  // Multi choice multi correct questions
  {
    numb: 21,
    question: "Which of the following is the Private Blockchains?",
    answer: ["R3Corda", "Hyperledger"],
    options: [
      "Bitcoin",
      "Ethereum",
      "R3Corda",
      "Hyperledger"
    ]
  },
  {
    numb: 22,
    question: "What are the two Types of Consensus in Corda?",
    answer: ["Validity", "Uniqueness"],
    options: [
      "Validity",
      "Endorsement",
      "Uniqueness",
      "Ordering"
    ]
  },
  {
    numb: 23,
    question: "Users can use __________ to design assets.",
    answer: ["Smartcontract", "Chaincode"],
    options: [
      "Smartcontract",
      "Chaincode",
      "Business rules",
      "Blockchain"
    ]
  },
  {
    numb: 24,
    question: "What are the requirements to qualify Zero Knowledge proof?",
    answer: ["Completeness", "Soundness","ZeroKnowledge"],
    options: [
      "Completeness",
      "Soundness",
      "ZeroKnowledge",
      "None of the above"
    ]
  },
  {
    numb: 25,
    question: "Chaincode in Hyperledger may be written in any of which three languages?",
    answer: ["NodeJs", "Golang", "Java"],
    options: [
      "NodeJs",
      "Golang",
      "Solidity",
      "Java"
    ]
  },
];