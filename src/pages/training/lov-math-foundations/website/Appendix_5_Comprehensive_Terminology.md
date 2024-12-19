<small>*_ Spirit Riddle Presents</small>

# Comprehensive Terminology for Algorithms, Graph Theory, Linear Algebra, and Probability

This packet includes the following:
- **Graph Theory**: Concepts and algorithms essential for understanding networks and connectivity.
- **Algorithms and Models**: Foundational techniques for text processing, clustering, and ranking.
- **Linear Algebra**: Operations, eigenvalues, and decompositions critical for optimization and data transformations.
- **Probability and Statistics**: Tools for data sampling, inference, and modeling uncertainty in real-world applications.

## Table of Contents
- [Graph Theory Terminology for Search Engines](#graph-theory-terminology-for-search-engines)
- [Algorithms and Models Terminology for Search Engines](#algorithms-and-models-terminology-for-search-engines)
- [Linear Algebra Terminology for Search Engines and Optimization Algorithms](#linear-algebra-terminology-for-search-engines-and-optimization-algorithms)
- [Probability and Statistics Terminology for Ranking Algorithms and Web Search](#probability-and-statistics-terminology-for-ranking-algorithms-and-web-search)
- [Final Notes](#final-notes)

<br/>
<br/>

## Graph Theory Terminology for Search Engines

### Fundamental Concepts
- **Graph**: A collection of nodes (vertices) and edges connecting them, used to represent relationships and structures.
- **Directed Graph (Digraph)**: A graph where edges have a direction, often used in web page link analysis.
- **Undirected Graph**: A graph where edges have no direction, representing bidirectional relationships.

### Key Properties
- **Node (Vertex)**: A fundamental unit of a graph, representing entities such as web pages or data points.
- **Edge**: A connection between two nodes, which can be directed or undirected.
- **Degree**:
  - **In-Degree**: Number of edges coming into a node.
  - **Out-Degree**: Number of edges leaving a node.
- **Weighted Graph**: A graph where edges have weights representing costs, distances, or probabilities.

### Graph Algorithms
- **Graph Traversal**:
  - **Depth-First Search (DFS)**: Explores as far as possible along a branch before backtracking.
  - **Breadth-First Search (BFS)**: Explores all nodes at the current level before moving deeper.
- **Shortest Path**:
  - **Dijkstra's Algorithm**: Finds the shortest path in a weighted graph.
  - **A* Algorithm**: Optimized pathfinding using heuristics.
- **Minimum Spanning Tree (MST)**:
  - **Prim's Algorithm**: Builds an MST by starting from a node and adding the smallest edge.
  - **Kruskal's Algorithm**: Builds an MST by sorting edges and adding them incrementally.

### Advanced Concepts
- **Adjacency Matrix**: A square matrix used to represent a graph, where each element indicates the presence or absence of an edge.
- **Adjacency List**: A list representation of a graph, where each node has a list of its adjacent nodes.
- **Connectivity**:
  - **Connected Graph**: A graph where there is a path between every pair of nodes.
  - **Strongly Connected Components (SCCs)**: Subsets of a directed graph where every node is reachable from every other node within the subset.

### Applications in Search Engines
- **PageRank**: A graph-based algorithm that ranks web pages by analyzing the link structure of the web.
- **HITS Algorithm**: Identifies hubs (pages pointing to many authorities) and authorities (pages pointed to by many hubs).
- **Graph Traversal for Indexing**: Techniques like BFS and DFS are used to crawl and index web pages.
- **Weighted Graphs for Ranking**: Models relationships between pages and computes relevance scores based on link weights.

### Visualization
- **Graph Plotting**: Visualizing nodes and edges to understand relationships and structures.
- **Force-Directed Layouts**: A technique for graph visualization where edges act as springs and nodes repel each other.

This terminology provides the foundational lingo for discussing graph theory in the context of search engine algorithms and web structures.


## Algorithms and Models Terminology for Search Engines

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

## Linear Algebra Terminology for Search Engines and Optimization Algorithms

### Matrix Operations
- **Addition**: Combining two matrices by adding their corresponding elements.
- **Multiplication**: Combining two matrices to form a new matrix, often used to model transformations or relationships.
- **Transpose**: Flipping a matrix over its diagonal, converting rows into columns.
- **Inverse**: A matrix that, when multiplied with the original matrix, yields the identity matrix; used in solving systems of equations.

### Vector Spaces
- **Vector**: A mathematical object with magnitude and direction, often used to represent data points or terms in a search engine.
- **Basis Vectors**: A set of vectors that define a coordinate system for a vector space.
- **Linear Independence**: A property where no vector in a set is a linear combination of the others, crucial for understanding dimensions of data.

### Rank of a Matrix
- **Rank**: The number of linearly independent rows or columns in a matrix, indicating the amount of meaningful information.

### Eigenvalues and Eigenvectors
- **Eigenvalue**: A scalar that represents how a transformation scales an eigenvector.
- **Eigenvector**: A vector that remains in the same direction after a transformation, used in ranking algorithms like PageRank to identify importance in networks.

### Singular Value Decomposition (SVD)
- **SVD**: A matrix factorization technique that decomposes a matrix into three components (U, Σ, Vᵀ). Used in Latent Semantic Analysis to reduce dimensionality and uncover latent relationships in data.

### Dot Product
- **Dot Product**: The multiplication of two vectors resulting in a scalar. Used to measure similarity between two data points in vector space.

### Norms
- **L2 Norm (Euclidean Distance)**: Measures the "length" of a vector in space, used to quantify similarity or difference between data points.
- **L1 Norm (Manhattan Distance)**: Measures the "taxicab" distance between two points in a grid-like path.

### Projection
- **Projection**: Mapping a vector onto another vector or subspace, often used to reduce dimensions while retaining key features.

### Orthogonality
- **Orthogonal Vectors**: Vectors that are perpendicular to each other, indicating no similarity. Orthogonal matrices preserve distances and are useful for optimization.

### Diagonalization
- **Diagonalization**: Converting a matrix into a diagonal form using its eigenvalues, simplifying computations.

### Outer Product
- **Outer Product**: A matrix formed by multiplying one vector as a column and another as a row, used in algorithms like SVD.

### Sparse Matrices
- **Sparse Matrix**: A matrix with a large number of zero elements, commonly used in representing large datasets like term-document matrices in search engines.

### Row and Column Space
- **Row Space**: The set of all possible linear combinations of the row vectors of a matrix.
- **Column Space**: The set of all possible linear combinations of the column vectors of a matrix. Both are key for understanding solutions to linear systems.

### QR Factorization
- **QR Factorization**: Decomposing a matrix into an orthogonal matrix (Q) and an upper triangular matrix (R), often used in numerical optimization.

## Probability and Statistics Terminology for Ranking Algorithms and Web Search

### Basic Probability
- **Probability**: A measure of the likelihood that an event will occur, ranging from 0 (impossible) to 1 (certain).
- **Independent Events**: Two events where the occurrence of one does not affect the other.
- **Conditional Probability**: The probability of one event occurring given that another event has already occurred.
- **Bayes' Theorem**: A formula that relates the conditional and marginal probabilities of random events, used in Bayesian inference.

### Distributions
- **Normal Distribution**: A continuous probability distribution that is symmetric around the mean, forming a bell-shaped curve. Used in many natural phenomena.
- **Binomial Distribution**: Describes the number of successes in a fixed number of binary (yes/no) trials.
- **Poisson Distribution**: Models the number of events occurring within a fixed interval of time or space.

### Expectation and Variance
- **Expectation (Mean)**: The average value of a random variable over many trials.
- **Variance**: Measures the spread of a random variable around its mean.
- **Standard Deviation**: The square root of the variance, representing the average distance from the mean.

### Bayesian Inference
- **Bayesian Inference**: A method of statistical inference in which Bayes' theorem is used to update probabilities as more evidence becomes available.
- **Prior Probability**: The initial probability of an event before new evidence is considered.
- **Posterior Probability**: The updated probability of an event after considering new evidence.

### Hypothesis Testing
- **Null Hypothesis (H₀)**: A statement that there is no effect or no difference, used as a baseline in statistical testing.
- **Alternative Hypothesis (H₁)**: A statement that contradicts the null hypothesis, suggesting an effect or difference.
- **P-Value**: The probability of obtaining results at least as extreme as the observed results, assuming the null hypothesis is true.
- **Confidence Interval**: A range of values that is likely to contain the true value of an unknown parameter.

### Regression Analysis
- **Linear Regression**: A method to model the relationship between a dependent variable and one or more independent variables.
- **Logistic Regression**: Used to model binary outcomes (e.g., true/false, yes/no).

### Information Gain
- **Entropy**: A measure of the uncertainty or randomness in a set of data.
- **Mutual Information**: Measures the reduction in uncertainty about one variable given knowledge of another.

### Markov Models
- **Markov Chain**: A stochastic model describing a sequence of possible events where the probability of each event depends only on the state of the previous event.
- **Transition Matrix**: A matrix that represents probabilities of transitioning from one state to another in a Markov chain.

### Random Variables
- **Random Variable**: A variable whose value is subject to randomness, often categorized as discrete or continuous.
- **Probability Density Function (PDF)**: Describes the likelihood of a continuous random variable taking on a specific value.
- **Cumulative Distribution Function (CDF)**: Describes the probability that a random variable is less than or equal to a certain value.

### Sampling and Estimation
- **Sampling**: Selecting a subset of data from a population for analysis.
- **Bias**: A systematic error introduced into sampling or estimation.
- **Maximum Likelihood Estimation (MLE)**: A method of estimating the parameters of a statistical model by maximizing the likelihood function.

### Correlation and Dependence
- **Correlation Coefficient**: A measure of the linear relationship between two variables, ranging from -1 to 1.
- **Covariance**: A measure of how two random variables vary together.

### Statistical Models in Search
- **TF-IDF (Term Frequency-Inverse Document Frequency)**: A statistical measure used to evaluate the importance of a word in a document relative to a corpus.
- **Latent Dirichlet Allocation (LDA)**: A probabilistic model used for topic modeling in text analysis.

This list captures the essential probability and statistics concepts that underpin ranking algorithms and web search relevance models.

## Final Notes
This combined terminology provides a foundational understanding of algorithms, graph theory, linear algebra, and probability essential for search engines, optimization, and modern data science applications.


