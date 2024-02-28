
class Solution {
   
}

class index{
	public static String reverseWords(String s) {
        char[] arr = s.toCharArray();
        StringBuilder res = new StringBuilder();
        int n = s.length();
        int i = 0;
    
        while (i < n) {
            StringBuilder temp = new StringBuilder();
            while (i < n && arr[i] == ' ') {
                i++;
            }
            while (i < n && arr[i] != ' ') {
                temp.append(arr[i]);
                i++;
            }
            if (temp.length() > 0) {
                if (res.length() > 0) {
                    res.insert(0, " ").insert(0, temp);
                } else {
                    res.insert(0, temp);
                }
            }
        }
        return res.toString();
    }
    
    public static void main(String[] args) {
		reverseWords("shreyash ingle");
    }
}