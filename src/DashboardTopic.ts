import { NetworkTables, NetworkTablesTopic, type NetworkTablesTypeInfo, type NetworkTablesTypes } from 'ntcore-ts-client';

class DashboardTopic<T extends NetworkTablesTypes> {
    pub: NetworkTablesTopic<T>;
    sub: NetworkTablesTopic<T>;
    onChanged: (value: T | null) => void;
    constructor(nt: NetworkTables, name: string, type: NetworkTablesTypeInfo, defaultValue: T, onChanged: (value: T) => void) {
        this.pub = nt.createTopic(`/Dashboard/dashboard/${name}`, type, defaultValue);
        this.sub = nt.createTopic(`/Dashboard/robot/${name}`, type, defaultValue);
        this.onChanged = (value: T | null) => {
            if (!this.sub.lastChangedTime || value === null)
                return;
            this.update(value);
            onChanged(value);
        }

        this.init().catch(console.error);
    }

    async init() {
        await this.publish();
        await this.subscribe();

        let value = this.get();
        if (value !== null) {
            this.onChanged(value);
            console.log(`Initialized ${this.pub.name} to ${value}`);
            // this.update(value);
        }
    }

    async publish() {
        return this.pub.publish().catch(console.error);
    }

    get() {
        return this.sub.getValue();
    }

    async subscribe() {
        return this.sub.subscribe(this.onChanged);
    }

    update(value: T | null) {
        if (value !== null) {
            this.pub.setValue(value);
            console.log(`Updated ${this.pub.name} to ${value}`);
        }
    }
}

export default DashboardTopic;