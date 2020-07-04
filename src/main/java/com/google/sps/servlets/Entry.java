package com.google.sps.servlets;

public final class Entry {

  private final long id;
  private final String message;
  private final long timestamp;
  //TODO: consider noting the user too

  public Entry(long id, String message, long timestamp) {
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
  }
}