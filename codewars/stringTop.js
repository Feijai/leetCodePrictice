//                                                       3 
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z 
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w 
//                                         v


function tops(msg) {
    let [res, i, j] = ['', 0, 0];
    
    while (msg[j += i++ * 4 + 1])
      res = msg[j] + res;
    
    return res;
  }

  