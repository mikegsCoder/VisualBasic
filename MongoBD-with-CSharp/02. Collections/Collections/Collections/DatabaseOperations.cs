﻿using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections
{
    public class DatabaseOperations
    {
        private MongoClient client;
        private IMongoDatabase db;

        public DatabaseOperations(string _databaseName)
        {
            client = new MongoClient("mongodb://localhost:27017");

            db = client.GetDatabase(_databaseName);
        }

        public async void GetCollections()
        {
            var collections = await db.ListCollections().ToListAsync();

            if (collections.Count == 0)
            {
                await Console.Out.WriteLineAsync("No collections in database!");
            }
            else
            {
                foreach (var collection in collections)
                {
                    Console.WriteLine(collection);
                }
            }
        }
    }
}
