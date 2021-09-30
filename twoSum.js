function twoSum(nums, target) {
  const previousValues = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const neededValue = target - currentValue
    if (previousValues[neededValue] != null) {
      return [previousValues[neededValue], i]
    } else {
      previousValues[currentValue] = i
    }
  }

	return []
}
var hakim = document.getElementById("this-element")
var animations = hakim.getAnimations()

for(var i =1; i<hakim.clientHeight;i++){
  animations.values[i]= animations.values[i+1]
}
var hakim = document.getElementById("this-element")
var animations = hakim.getAnimations()

for(var i =1; i<hakim.clientHeight;i++){
  animations.values[i]= animations.values[i+1]
}