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

/**
 * Transpose a matrix
 * @param {object} matrix the matrix to transpose
 * @returns {object} the resultant matrix
 */
function transposeMatrix(matrix) {
  if(!validateMatrix(matrix)) throw "Invalid matrix supplied";

  result = [];
  for(var i = 0; i < matrix[0].length; i++) {
    result[i] = []
    for(var j = 0; j < matrix.length; j++) {
      result[i][j] = matrix[j][i];
    }
  }

  return result;
}

/**
 * Generates and identity matrix
 * @param {number} dimension the number of rows and columns
 * @returns {object} the identity matrix
 */
function identityMatrix(dimension) {
  if(typeof(dimension) !== "number" || dimension <= 0) throw "Dimension must be a number greater than 0";

  var result = [];
  for(var i = 0; i < dimension; i++) {
    result[i] = [];
    for(var j = 0; j < dimension; j++) {
      if(i === j) {
        result[i][j] = 1;
      } else {
        result[i][j] = 0;
      }
    }
  }

  return result;
}

/**
 * Calculates the determinant of a matrix recurrsively
 * @param {object} matrix the matrix needing a determinant
 * @returns {number} the determinant
 */
function determinant(matrix) {
  if(!validateMatrix(matrix)) throw "Invalid matrix supplied";

  if(matrix.length === 1 && matrix[0].length === 1) return matrix[0][0]; // If the matrix has a single value return the number

  var det = 0;
  for(var col = 0; col < matrix[0].length; col++) {
    var minorMatrix = [];
    for(var i = 1; i < matrix.length; i++) {
      minorMatrix[i - 1] = [];
      for(var j = 0; j < matrix[0].length; j++) {
        minorMatrix[i - 1].push(matrix[i][j]);
      }
    }
    var value = matrix[0][col] * determinant(minorMatrix);
    if(col % 2) {
      det -= value;
    } else {
      det += value;
    }
  }

  return det;
}
