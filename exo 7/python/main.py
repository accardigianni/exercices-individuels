# This is a sample Python script.

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
total_alumn = 10


# def print_hi(name):
#     # Use a breakpoint in the code line below to debug your script.
#     print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.
def number_player():
    """
    Ask the number of player (calling in player)
    :return: return a number (int)
    """
    print("How many player are you ?")
    response = input()
    try:
        int(response)
    except:
        print("Enter a number please ?")
        number_player()
    else:
        response = int(response)
        print(response)
        return response


def create_name_player():
    """
    create a name for the player (calling in player)
    :return: string name of the player
    """
    print("Whats your name ?")
    name = input()
    print(f"Hello {name}, are you ready?")
    return name


def player():
    """
    create player list of player ( call number player and name player)
    :return:list of player
    """
    arrayplayer = []
    nbrplay = number_player()
    for i in range(nbrplay):
        arrayplayer.append(create_name_player())
    return arrayplayer


def ask_player():
    """
    ask player how many alumn to take
    :return: number of alumns to take
    """
    print("How many alumns do you take ?")
    number = input()
    try:
        int(number)
    except:
        print("it's not a number")
        ask_player()
    else:
        number = int(number)
        if good_number(number):
            take_alumn(number)
        else:
            ask_player()


def take_alumn(number):
    """
    take some alumns in total_alumns
    :param number: number of alumns to take
    :return: total_alumn
    """
    global total_alumn
    total_too_much_take = total_alumn
    total_alumn -= number
    if total_alumn < 0:
        print("coucou")
        print("You take too much alumn")
        total_alumn = total_too_much_take
        ask_player()
    else:
        print(total_alumn)
        return total_alumn


def good_number(number):
    """
    check if the number is between 1 and 6
    :param number: number
    :return: bollean
    """
    if 6 >= number >= 1:
        return True
    else:
        print("You have to choose between 1 and 6 alumn")
        return False


def did_you_win():
    """
    Check if you win the game
    :return: message you win
    """
    while total_alumn != 0:
        ask_player()
    else:
        print("you win")


def playgame():
    """
    Script to launch an entire game
    :return: the end
    """





# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # playgame()
    # number_player()
    playgame()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
