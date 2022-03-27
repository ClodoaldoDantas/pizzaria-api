declare namespace Express {
  export interface Request {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>;
  }
}
