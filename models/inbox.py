from . import db

class Conversation(db.Model):
    __tablename__ = 'conversations'

    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    handle = db.Column(db.String(100), nullable=False)
    channel = db.Column(db.String(50), nullable=False)  # instagram, whatsapp
    unread = db.Column(db.Integer, default=0)
    last = db.Column(db.Text, nullable=True)
    time = db.Column(db.String(50), nullable=True)

    messages = db.relationship('Message', backref='conversation', cascade='all, delete-orphan', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'handle': self.handle,
            'channel': self.channel,
            'unread': self.unread,
            'last': self.last,
            'time': self.time,
            'messages': [m.to_dict() for m in self.messages]
        }


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    conversation_id = db.Column(db.String(50), db.ForeignKey('conversations.id'), nullable=False)
    sender_type = db.Column(db.String(10), nullable=False)  # 'in' or 'out'
    text = db.Column(db.Text, nullable=False)
    time = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'conversationId': self.conversation_id,
            'from': self.sender_type,
            'text': self.text,
            'time': self.time
        }
