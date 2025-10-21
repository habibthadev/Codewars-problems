package kata
​
func Solution(str string) []string {
    if len(str) == 0 {
        return []string{}
    }
    
    result := []string{}
    
    for i := 0; i < len(str); i += 2 {
        if i+1 < len(str) {
            result = append(result, str[i:i+2])
        } else {
            result = append(result, string(str[i])+"_")
        }
    }
    
    return result
}