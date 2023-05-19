

# class Card:
#     def _init_(self, number, signs):
#         self.number = number
#         self.signs = signs
#
#     def show(self):
#         print("{} of {}".format(self.number, self.signs))
#
# class Deck:
#     def _init_(self):
#         self.cards = []
#         self.build()
#         def build(self):
#             for s in ["♠", "♣", "♡", "♢"] :
#                 for n in range(1, 14):
#                     self.cards.append(Card(s, n))
#                     def show(self):
#                         for c in self.cards:
#                             deck = Deck()
#                             deck.show()


value = list(range(2, 15))
    suits = ["♠", "♣", "♡", "♢"]
    face_cards = {
        11: 'J',
        12: 'Q',
        13: "K",
        14: "As",
        'J': 11,
        'Q': 12,
        'K': 13,
        'As': 14
    }
class Card:


    def __init__(self, value, sign):
        self.value = value
        self.sign = sign


def generate_a_deck(value, sign):
    deck = []
    for v in value:

        for s in sign:
            if value in face_cards:
                card_value = face_cards[value]
                deck.append(Card(card_value, sign))
            else:
                deck.append(Card(card_value, sign))
    return deck

