package com.simpsolu.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

import com.simpsolu.model.MessagingMessage;

public class MessagingStorage {

	private Queue<MessagingMessage> storage;
	
	public MessagingStorage() {
		storage = new ConcurrentLinkedQueue<MessagingMessage>();
	}

	/**
	 * 
	 * @param msg
	 */
	public void newMessage(MessagingMessage msg) {
		msg.setTimestamp(System.currentTimeMillis());
		storage.add(msg);
		if (storage.size() > 200) {
			storage.poll();
		}
	}
	
	/**
	 * 
	 * @param timestamp
	 * @return
	 */
	public List<MessagingMessage> getMessagesAfter(long timestamp) {
		List<MessagingMessage>	result = new ArrayList<MessagingMessage>();
		
		for (MessagingMessage msg : storage) {
			if (msg.getTimestamp() >= timestamp) {
				result.add(msg);
			}
		}
		
		return result;
	}
}
