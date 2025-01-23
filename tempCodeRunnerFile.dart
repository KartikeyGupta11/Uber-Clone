#include<bits/stdc++.h>
using namespace std;

int convertTimeToMinutes(const string& time){
  int hours, minutes;
  char ampm[3];
  sscanf(time.c_str(), "%d:%d%s", &hours, &minutes, ampm);
  
  if(hours == 12) hours = 0;
  if(strcmp(ampm, "PM") == 0) hours += 12;
  
  return hours * 60 + minutes;
}

int main(){
  int N;
  cin >> N;
  cin.ignore();
  
  map<int, vector<pair<int, bool>>> logs;
  string line;
  
  for(int i = 0; i < N; i++){
    getline(cin, line);
    stringstream ss(line);
    int empId;
    string action, location, time;
    
    ss >> empId >> action >> location >> time;
    
    int timeInMinutes = convertTimeToMinutes(time);
    bool isEntering = (action == "enters");
    
    logs[empId].emplace_back(timeInMinutes, isEntering);
  }
  
  int suspectId;
  cin >> suspectId;
  
  map<int, int> workTime;
  map<int, bool> validEmployee;
  
  for(const auto& entry : logs){
    int empId = entry.first;
    const auto& activities = entry.second;
    
    int totalWorkTime = 0;
    int lastEntryTime = -1;
    
    for(const auto& activity : activities){
      int time = activity.first;
      bool isEntering = activity.second;
      if(isEntering){
        lastEntryTime = time;
      }
      else{
        if(lastEntryTime != -1){
          totalWorkTime += time - lastEntryTime;
          lastEntryTime = -1;
        }
      }
    }
    
    if(totalWorkTime > 0){
      workTime[empId] = totalWorkTime;
      validEmployee[empId] = true;
    }
    else{
      validEmployee[empId] = false;
    }
  }
  
  int minWorkTime = INT_MAX;
  bool suspectValid = validEmployee[suspectId];
  bool suspectIsMin = true;
  
  for(const auto& entry : workTime){
    int empId = entry.first;
    int timeSpent = entry.second;
    
    if(timeSpent < minWorkTime){
      minWorkTime = timeSpent;
      suspectIsMin = (empId == suspectId);
    }
    else if(timeSpent == minWorkTime){
      suspectIsMin = false;
    }
  }
  
  if(!suspectValid){
    cout << "Cannot be determined";
  }
  else if(suspectIsMin){
    cout << "Yes";
  }
  else{
    cout << "No";
  }
  
  return 0;
}
