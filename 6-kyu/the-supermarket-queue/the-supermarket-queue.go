package kata
​
func QueueTime(customers []int, n int) int {
    if len(customers) == 0 {
        return 0
    }
    if n == 1 {
        sum := 0
        for _, t := range customers {
            sum += t
        }
        return sum
    }
    
    // Create array to track time for each till
    tills := make([]int, n)
    
    // Assign each customer to the till with minimum time
    for _, customerTime := range customers {
        // Find the till with minimum time
        minIdx := 0
        for i := 1; i < n; i++ {
            if tills[i] < tills[minIdx] {
                minIdx = i
            }
        }
        tills[minIdx] += customerTime
    }
    
    maxTime := tills[0]
    for i := 1; i < n; i++ {
        if tills[i] > maxTime {
            maxTime = tills[i]
        }
    }
    
    return maxTime
}