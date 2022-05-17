//   "B 100.100.100.1 100.100.100.2"
//   "B 100.100.100.1 100.100.100.3"
//   "B 100.100.100.10 100.100.100.11"
//   "T 100.100.100.1 100.100.100.3"
//   "T 100.100.100.10 100.100.100.2"
//   "T 100.100.100.10 100.100.100.11"
//   "B 100.100.100.11 100.100.100.2"
//   "T 100.100.100.10 100.100.100.3"
//   "T 100.100.100.100 100.100.100.103"

class NetworkNode {
  constructor(IP) {
    this.IP = IP;
    this.connectedNodes = [];
  }
  connectNode(node) {
    this.connectedNodes.push(node);
  }
}
function checkConnection(startNode, endNode) {
  console.log(startNode.connectedNodes, endNode.IP);
  let check;
  for (let i = 0; i < startNode.connectedNodes.length; i++) {
    if (startNode.connectedNodes[i].includes(endNode.IP)) {
      check = true;
    }
  }
  return check;
}

let node1 = new NetworkNode("100.100.100.1");
node1.connectNode("100.100.100.2");
node2.connectNode("100.100.100.3");

let node2 = new NetworkNode("100.100.100.2");
node2.connectNode("100.100.100.1");
node2.connectNode("100.100.100.3");

let node3 = new NetworkNode("100.100.100.3");
node3.connectNode("100.100.100.1");
node3.connectNode("100.100.100.2");

// let node3 = new NetworkNode("100.100.100.10");
// node3.connectNode("100.100.100.1");
// node3.connectNode("100.100.100.2");

console.log(checkConnection(node1, node2));
