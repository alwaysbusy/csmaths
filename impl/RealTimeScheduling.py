# Python3 and above
# This file does not follow all conventions of Python, sorry

import math


class Task:
    def __init__(self, period, deadline=None, computation=None):
        self._period = period
        if deadline is None:
            deadline = period
        self._deadline = deadline
        self._computation = computation
        self.name = "Task"

    @property
    def period(self):
        return self._period

    @property
    def deadline(self):
        return self._deadline

    @property
    def computation(self):
        return self._computation

    def deadlineType(self):
        if self._deadline == self._period:
            return "Implicit"
        elif self._deadline < self._period:
            return "Constrained"
        else:
            return "Arbitary"

def response_time(task, higher_tasks=None, previous=1):
    if higher_tasks is None:
        return this.computation

    response = task.computation
    for higher_task in higher_tasks:
        response += math.ceil(previous / higher_task.period) * higher_task.computation

    if response == previous:
        return response
    else:
        return response_time(task, higher_tasks, response)

def schedulability_test(tasks):
    utilisation = 0
    for task in tasks:
        utilisation += task.computation / task.period

    return utilisation <= len(tasks) * (2 ** (1 / len(tasks)) - 1)

if __name__ == "__main__":
    priority_list = []
    priority_list.append(Task(20,20,3))
    priority_list.append(Task(30,15,3))
    priority_list.append(Task(12,7,4))
    priority_list.append(Task(10,5,1))
    for index, task in enumerate(priority_list):
        print("Task " + str(index) + " has a runtime of " + str(response_time(task, priority_list[index + 1:])))
    if schedulability_test(priority_list):
        print("This set is schedulable")
    else:
        print("This set is not necesarily schedulable")
