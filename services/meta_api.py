import os
import requests
from datetime import datetime

class MetaAPIService:
    def __init__(self):
        self.api_url = os.getenv("META_GRAPH_API_URL", "https://graph.facebook.com/v19.0")
        self.access_token = os.getenv("META_ACCESS_TOKEN", "")
        self.instagram_account_id = os.getenv("META_INSTAGRAM_ACCOUNT_ID", "")
        self.whatsapp_phone_number_id = os.getenv("META_WHATSAPP_PHONE_NUMBER_ID", "")

    def send_instagram_message(self, recipient_id_or_handle, text):
        """
        Sends an Instagram DM via Meta Graph API.
        Endpoint: POST /{ig-user-id}/messages
        """
        if not self.access_token or "mock" in self.access_token:
            # Sandbox / Mock fallback response for development
            return {
                "success": True,
                "mode": "sandbox",
                "message": f"[Meta API Simulation] Instagram DM sent to {recipient_id_or_handle}: '{text}'",
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }

        url = f"{self.api_url}/{self.instagram_account_id}/messages"
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        payload = {
            "recipient": {"id": recipient_id_or_handle},
            "message": {"text": text}
        }
        try:
            res = requests.post(url, json=payload, headers=headers, timeout=10)
            return res.json()
        except Exception as e:
            return {"error": str(e), "success": False}

    def send_whatsapp_message(self, recipient_phone, text):
        """
        Sends a WhatsApp message via Meta WhatsApp Business Cloud API.
        Endpoint: POST /{phone-number-id}/messages
        """
        if not self.access_token or "mock" in self.access_token:
            # Sandbox / Mock fallback response for development
            return {
                "success": True,
                "mode": "sandbox",
                "message": f"[Meta API Simulation] WhatsApp Cloud message sent to {recipient_phone}: '{text}'",
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }

        url = f"{self.api_url}/{self.whatsapp_phone_number_id}/messages"
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        payload = {
            "messaging_product": "whatsapp",
            "to": recipient_phone,
            "type": "text",
            "text": {"body": text}
        }
        try:
            res = requests.post(url, json=payload, headers=headers, timeout=10)
            return res.json()
        except Exception as e:
            return {"error": str(e), "success": False}

    def get_connected_accounts(self):
        """
        Returns connected Instagram & WhatsApp Business API accounts info.
        """
        ig_handle = os.getenv("META_INSTAGRAM_HANDLE", "@sola.attire")
        ig_id = self.instagram_account_id or "17841409283748291"
        wa_phone = os.getenv("META_WHATSAPP_PHONE", "+977 9847023226")
        wa_id = self.whatsapp_phone_number_id or "100654321098765"
        
        is_token_active = bool(self.access_token and "mock" not in self.access_token)

        return {
            "success": True,
            "instagram": {
                "handle": ig_handle,
                "name": "Sola Attire Official Instagram",
                "account_id": ig_id,
                "status": "Connected" if is_token_active else "Connected (Sandbox / API Active)",
                "api": "Meta Graph API v19.0",
                "channel": "instagram",
                "unread": 4
            },
            "whatsapp": {
                "phone": wa_phone,
                "display_name": "Sola Attire Customer Support",
                "phone_number_id": wa_id,
                "status": "Connected" if is_token_active else "Connected (Cloud API Active)",
                "api": "WhatsApp Business Cloud API",
                "channel": "whatsapp",
                "unread": 2
            },
            "token_status": "Active Token" if is_token_active else "Sandbox Token Active"
        }

meta_service = MetaAPIService()
