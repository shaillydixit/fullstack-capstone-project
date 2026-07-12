const seedItems = [
  { _id: '1', title: 'Coffee Table', description: 'Solid wood coffee table in good condition.', category: 'Furniture', location: 'Seattle', imageUrl: 'https://example.com/table.jpg' },
  { _id: '2', title: 'Vintage Lamp', description: 'Warm-toned lamp with a brass base.', category: 'Decor', location: 'Denver', imageUrl: 'https://example.com/lamp.jpg' },
  { _id: '3', title: 'Dining Chair Set', description: 'Four chairs suitable for a small dining room.', category: 'Furniture', location: 'Austin', imageUrl: 'https://example.com/chairs.jpg' },
  { _id: '4', title: 'Ceramic Planter', description: 'Terracotta planter with drainage holes.', category: 'Garden', location: 'Chicago', imageUrl: 'https://example.com/planter.jpg' },
  { _id: '5', title: 'Kids Bicycle', description: '20-inch bicycle with training wheels.', category: 'Toys', location: 'Phoenix', imageUrl: 'https://example.com/bike.jpg' },
  { _id: '6', title: 'Bluetooth Speaker', description: 'Portable speaker with excellent sound quality.', category: 'Electronics', location: 'Miami', imageUrl: 'https://example.com/speaker.jpg' },
  { _id: '7', title: 'Bookshelf', description: 'Two-shelf unit with minor surface scratches.', category: 'Furniture', location: 'Portland', imageUrl: 'https://example.com/bookshelf.jpg' },
  { _id: '8', title: 'Ladder', description: 'Lightweight ladder for household chores.', category: 'Tools', location: 'San Diego', imageUrl: 'https://example.com/ladder.jpg' },
  { _id: '9', title: 'Desk Organizer', description: 'Minimal desk organizer with compartments.', category: 'Office', location: 'Boston', imageUrl: 'https://example.com/organizer.jpg' },
  { _id: '10', title: 'Yoga Mat', description: 'Gently used yoga mat in good shape.', category: 'Sports', location: 'Atlanta', imageUrl: 'https://example.com/yoga.jpg' },
  { _id: '11', title: 'Microwave Oven', description: 'Compact microwave that works well.', category: 'Appliances', location: 'Houston', imageUrl: 'https://example.com/microwave.jpg' },
  { _id: '12', title: 'Picnic Basket', description: 'Woven basket with utensils included.', category: 'Outdoors', location: 'Nashville', imageUrl: 'https://example.com/picnic.jpg' },
  { _id: '13', title: 'Board Games', description: 'Assorted board games for family night.', category: 'Entertainment', location: 'Madison', imageUrl: 'https://example.com/games.jpg' },
  { _id: '14', title: 'Winter Jacket', description: 'Water-resistant jacket in size medium.', category: 'Clothing', location: 'Boise', imageUrl: 'https://example.com/jacket.jpg' },
  { _id: '15', title: 'Air Fryer', description: 'Easy-to-clean air fryer with basket.', category: 'Appliances', location: 'Charlotte', imageUrl: 'https://example.com/airfryer.jpg' },
  { _id: '16', title: 'Plant Stand', description: 'Wooden stand for indoor plants.', category: 'Garden', location: 'Raleigh', imageUrl: 'https://example.com/plantstand.jpg' }
];

const client = {
  connected: false,
  async connect() {
    this.connected = true;
    return true;
  },
  async close() {
    this.connected = false;
    return true;
  }
};

async function connectToDatabase() {
  if (!client.connected) {
    await client.connect();
  }
  return { client, items: seedItems };
}

module.exports = { client, connectToDatabase, seedItems };
