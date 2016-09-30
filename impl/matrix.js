// Any matrix is defined as being a 2D array of the form [row][column]

/**
 * Validates a matrix to ensure it is correctly formed
 * @param {object} matrix a matrix
 * @returns {boolean} is the matrix valid
 */
function validateMatrix(matrix) {
  if(typeof(matrix) !== "object") return false; // Checks the matrix is an array
  if(matrix.length === 0) return false; // Checks there is at least one row

  // Set the number of columns and check that there is at least one
  cols = 0;
  if(typeof(matrix[0]) !== "object") return false;
  cols = matrix[0].length
  if (cols === 0) return false;

  for(var i = 0; i < matrix.length; i++) {
    if(typeof(matrix[i]) !== "object" || matrix[i].length !== cols) return false; // Make sure all columns are the same size
    for(var j = 0; j < cols; j++) {
      if(typeof(matrix[i][j]) !== "number") return false; // Every value must be a number
    }
  }

  return true;
}

/**
 * Adds two matrices together (L+R)
 * @param {object} lhs Left-hand side matrix
 * @param {object} rhs right-hand side matrix
 * @returns {object} the resultant matrix
 */
function addMatrices(lhs, rhs) {
 if(!validateMatrix(lhs) || !validateMatrix(rhs)) throw "Invalid matrix supplied";

 result = [];
 for(var i = 0; i < lhs.length; i++) {
   result[i] = [];
   for(var j = 0; j < rhs.length; j++) {
     result[i][j] = lhs[i][j] + rhs[i][j];
   }
 }

 return result;
}

/**
* Subtracts right-hand matrix from the left (L-R)
* @param {object} lhs left-hand side matrix
* @param {object} rhs right-hand side matrix
* @returns {object} the resultant matrix
*/
function subtractMatrices(lhs, rhs) {
  if(!validateMatrix(lhs) || !validateMatrix(rhs)) throw "Invalid matrix supplied";

  result = [];
  for(var i = 0; i < lhs.length; i++) {
    result[i] = [];
    for(var j = 0; j < rhs.length; j++) {
      result[i][j] = lhs[i][j] - rhs[i][j];
    }
  }

  return result;
}

/**
 * Multiply two matrices together, or one by a scalar
 * @param {object} lhs left-hand side matrix
 * @param {object} rhs right-hand side matrix
 * @returns {object} the resultant matrix
 */
function multiplyMatrix(lhs, rhs) {
  if(typeof(lhs) === "number" && validateMatrix(rhs)) {
    // Swap the values round for convenience
    var temp = rhs;
    rhs = lhs;
    lhs = temp;
  }
  if(validateMatrix(lhs) && typeof(rhs) === "number") {
    // matrix * scalar
    result = [];
    for(var i = 0; i < lhs.length; i++) {
      result[i] = [];
      for(var j = 0; j < rhs.length; j++) {
        result[i][j] = lhs[i][j] * rhs;
      }
    }

    return result;
  } else if(!validateMatrix(lhs) || !validateMatrix(rhs)) {
    // Invalid parameters
    throw "Invalid matrix supplied";
  } else if(lhs[0].length !== rhs.length) {
    // Vectors cannot be multiplied
    throw "Left-hand matrix columns must match Right-hand side matrix rows";
  } else {
    // matrix * matrix
    result = [];
    for(var i = 0; i < lhs.length; i++) {
      result[i] = [];
      for(var j = 0; j < rhs.length; j++) {
        result[i][j] = 0;
        for(var k = 0; k < rhs.length; k++) {
          result[i][j] += lhs[i][k] + rhs[k][j];
        }
      }
    }

    return result;
  }
}
