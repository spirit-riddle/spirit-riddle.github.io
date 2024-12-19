<small>*_ Spirit Riddle Presents</small>

# Algorithms and Models

Algorithms and models are the heart of computational problem-solving. They define how we process data, optimize solutions, and predict outcomes in a structured and efficient manner. From search and sorting techniques to clustering and optimization models, these tools empower us to tackle challenges across diverse fields like software development, data analysis, and artificial intelligence.

This packet delves into foundational algorithms, advanced paradigms, and their practical applications, offering you the knowledge to build robust and innovative solutions.

## Table of Contents
- [Terminology](#terminology)
- [Algorithms](#algorithms)
<!-- For future expansion -->
<!-- - [Clustering Techniques](#clustering-techniques)
- [Ranking Models](#ranking-models)
- [Dimensionality Reduction Methods](#dimensionality-reduction-methods)
- [Probabilistic Models](#probabilistic-models)
- [Optimization Techniques](#optimization-techniques)
- [Information Retrieval Models](#information-retrieval-models)
- [Neural Network Applications](#neural-network-applications) -->
- [Final Notes](#final-notes)

<br/>
<br/>

## Terminology

### Text Processing
- **TF-IDF (Term Frequency-Inverse Document Frequency)**: A statistical measure that evaluates the importance of a word in a document relative to a collection of documents.
- **Cosine Similarity**: A metric used to measure the cosine of the angle between two non-zero vectors, often representing document similarity.
- **Jaccard Similarity**: Measures the overlap between two sets, used to calculate similarity between documents or terms.
- **Bag of Words (BoW)**: A representation of text data where the frequency of words is used without considering grammar or order.
- **Word Embeddings**: Dense vector representations of words in a continuous space, capturing semantic relationships.

### Graph-Based Algorithms
- **PageRank**: An algorithm that ranks web pages by analyzing the link structure of the web, assigning higher scores to pages with more or higher-quality links.
- **HITS (Hyperlink-Induced Topic Search)**: A graph-based algorithm that identifies hubs (pages pointing to many authorities) and authorities (pages pointed to by many hubs).
- **Graph Traversal**:
  - **Depth-First Search (DFS)**: Explores as far as possible along a branch before backtracking.
  - **Breadth-First Search (BFS)**: Explores all nodes at the current level before moving deeper.
- **Shortest Path Algorithms**:
  - **Dijkstra's Algorithm**: Finds the shortest path from a single source to all nodes in a graph.
  - **A* Algorithm**: An optimization of Dijkstra's algorithm using heuristics for faster pathfinding.
- **Connected Components**: Identifies groups of connected nodes in a graph.

### Clustering Models
- **K-Means Clustering**: Partitions data into K clusters by minimizing the variance within each cluster.
- **Hierarchical Clustering**: Creates a tree-like structure of clusters, useful for visualizing relationships.
- **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)**: Groups points based on density, identifying clusters of arbitrary shape and handling outliers.

### Ranking Models
- **BM25**: A probabilistic model used for ranking documents based on term frequency and document length.
- **Learning to Rank**: Machine learning models that combine multiple features to rank documents or items.

### Dimensionality Reduction
- **Singular Value Decomposition (SVD)**: Decomposes a matrix into components to reduce dimensionality, commonly used in Latent Semantic Analysis.
- **Principal Component Analysis (PCA)**: Reduces dimensionality by finding the principal components that capture the most variance in data.

### Probabilistic Models
- **Naive Bayes Classifier**: A probabilistic algorithm based on Bayes' theorem, used for text classification.
- **Latent Dirichlet Allocation (LDA)**: A generative probabilistic model for topic modeling in text data.
- **Hidden Markov Models (HMM)**: Models sequences of observations and hidden states, often used in language modeling.

### Optimization Techniques
- **Gradient Descent**: An iterative algorithm to minimize a loss function by updating model parameters in the direction of steepest descent.
- **Regularization**: A method to prevent overfitting by penalizing complex models.

### Information Retrieval Models
- **Vector Space Model**: Represents documents and queries as vectors in a multidimensional space, enabling similarity computation.
- **Boolean Retrieval Model**: Uses Boolean operators (AND, OR, NOT) to match documents to queries.

### Neural Network Models for Search
- **Transformer Models**: Deep learning models that process sequential data, such as text, using self-attention mechanisms.
- **BERT (Bidirectional Encoder Representations from Transformers)**: A transformer-based model that understands context by processing text bidirectionally.
- **Embedding-Based Retrieval**: Uses dense vector representations to retrieve semantically similar documents.

This terminology encompasses key mathematical and algorithmic foundations essential for search engine technology.

## Algorithms and Models

### Search Algorithms
1. **Binary Search**: Efficiently finds the position of a target element in a sorted array. Commonly used in database queries and search engines.
2. **Linear Search**: Iterates through elements to find a target. Suitable for unsorted or small datasets.
3. **Exponential Search**: Extends binary search to unbounded or infinite arrays. Used in specific mathematical and computational problems.

---

### Sorting Algorithms
1. **QuickSort**: Divides and conquers by partitioning the array and sorting subarrays. Preferred for its average-case efficiency in large datasets.
2. **MergeSort**: Recursively divides the array, sorts, and merges. Common in external sorting and parallel processing.
3. **HeapSort**: Builds a heap structure to sort elements. Often used in real-time systems and priority queues.
4. **Insertion Sort**: Builds the sorted array one element at a time. Useful for small or nearly sorted datasets.
5. **Bubble Sort**: Repeatedly swaps adjacent elements in incorrect order. Simple but inefficient for large datasets.

---

### Dynamic Programming Techniques
1. **Knapsack Problem Algorithm**: Solves optimization problems by dividing them into subproblems. Used in resource allocation and finance.
2. **Floyd-Warshall Algorithm**: Finds shortest paths between all pairs of nodes. Useful in routing and navigation.
3. **Longest Common Subsequence (LCS)**: Finds the longest sequence common to two strings. Applied in DNA analysis and text comparison.
4. **Matrix Chain Multiplication**: Optimizes the cost of multiplying matrices. Foundational in computational mathematics.

---

### Divide-and-Conquer Methods
1. **Binary Search Tree Algorithms**: Splits data into halves for efficient searching. Used in database indexing.
2. **Karatsuba Multiplication**: Multiplies large numbers more efficiently than traditional methods. Foundational in cryptography and computational math.
3. **Strassen’s Algorithm**: Multiplies matrices faster than standard algorithms. Essential in computational mathematics and graphics.
4. **Closest Pair of Points**: Finds the closest pair of points in a plane. Applied in computational geometry.

---

### Greedy Algorithms
1. **Prim’s Algorithm**: Finds the Minimum Spanning Tree (MST) by adding edges with the smallest weight. Used in network design.
2. **Kruskal’s Algorithm**: Builds the MST by sorting edges by weight and avoiding cycles. Ideal for sparse graphs.
3. **Huffman Coding**: Compresses data efficiently. Foundational in data compression techniques.

---

### Backtracking Algorithms
1. **N-Queens Problem**: Places N queens on a chessboard such that no two threaten each other. Classic example of constraint satisfaction.
2. **Sudoku Solver**: Solves Sudoku puzzles using backtracking. Popular in game design and AI.
3. **Hamiltonian Path and Cycle**: Finds paths or cycles that visit every vertex exactly once. Applied in routing and optimization problems.

---

### String Matching Algorithms
1. **Knuth-Morris-Pratt (KMP)**: Finds occurrences of a pattern in a text efficiently. Used in text editors and search functions.
2. **Rabin-Karp Algorithm**: Uses hashing to find patterns in a string. Ideal for plagiarism detection and DNA sequencing.
3. **Boyer-Moore Algorithm**: Skips sections of the text to speed up pattern matching. Applied in text processing.

---

### Numerical Methods
1. **Newton-Raphson Method**: Approximates roots of equations. Foundational in numerical analysis and optimization.
2. **Gaussian Elimination**: Solves systems of linear equations. Core to linear algebra and computer graphics.
3. **Gradient Descent**: Optimizes functions iteratively. Widely used in machine learning.

---

### Randomized Algorithms
1. **Quicksort (Random Pivot)**: Enhances Quicksort by randomizing the pivot selection. Ensures balanced partitions on average.
2. **Monte Carlo Algorithm**: Uses randomness to approximate solutions. Foundational in probabilistic analysis.
3. **Las Vegas Algorithm**: Uses randomness but always produces correct results. Applied in randomized primality testing.

---

### Graph-Based Models
1. **PageRank Algorithm**: Ranks web pages based on their links. Core to search engines.
2. **Markov Chains**: Models state transitions in probabilistic systems. Used in finance, AI, and queueing theory.
3. **Hidden Markov Models (HMMs)**: Models systems with hidden states. Foundational in speech recognition and bioinformatics.

## Final Notes
Understanding algorithms and models equips you with the skills to approach problems systematically and design solutions that scale. As you apply these techniques, remember their versatility across domains—from powering search engines to driving machine learning innovations.

Stay curious, experiment boldly, and let algorithms guide your journey into the future of technology.
